import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { email: 'admin@library.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@library.com',
      password: adminPassword,
      role: 'ADMIN',
    },
  });

  // Create sample books
  const books = [
    {
      title: 'বাংলা সাহিত্যের ইতিহাস',
      titleBn: 'বাংলা সাহিত্যের ইতিহাস',
      author: 'ড. মুহম্মদ শহীদুল্লাহ',
      authorBn: 'ড. মুহম্মদ শহীদুল্লাহ',
      publisher: 'বাংলা একাডেমি',
      publisherBn: 'বাংলা একাডেমি',
      isbn: '978-984-123-456-7',
      category: 'সাহিত্য',
      categoryBn: 'সাহিত্য',
      edition: '৩য়',
      language: 'বাংলা',
      pages: 450,
      shelfNumber: 'B-12',
      available: true,
      featured: true,
      popular: true,
    },
    {
      title: 'বিজ্ঞান ও প্রযুক্তি',
      titleBn: 'বিজ্ঞান ও প্রযুক্তি',
      author: 'প্রফেসর মো. জামিল',
      authorBn: 'প্রফেসর মো. জামিল',
      publisher: 'বিজ্ঞান একাডেমি',
      publisherBn: 'বিজ্ঞান একাডেমি',
      isbn: '978-984-123-456-8',
      category: 'বিজ্ঞান',
      categoryBn: 'বিজ্ঞান',
      edition: '২য়',
      language: 'বাংলা',
      pages: 380,
      shelfNumber: 'S-05',
      available: true,
      featured: true,
      popular: true,
    },
  ];

  for (const book of books) {
    await prisma.book.upsert({
      where: { isbn: book.isbn },
      update: {},
      create: book,
    });
  }

  // Create sample settings
  const settings = [
    { key: 'site_name', value: 'স্পিকার আঃ জব্বার খান স্মৃতি পাবলিক লাইব্রেরি', category: 'general' },
    { key: 'site_description', value: 'জ্ঞানই শক্তি — বই হোক সকলের বন্ধু', category: 'general' },
    { key: 'contact_email', value: 'sajkspla@gmail.com', category: 'contact' },
    { key: 'contact_phone', value: '+৮৮০ ১৭১২-৩৪৫৬৭৮', category: 'contact' },
    { key: 'address', value: 'গ্রাম: ভূতেরদিয়া, উপজেলা: বাবুগঞ্জ, জেলা: বরিশাল', category: 'contact' },
    { key: 'office_hours', value: 'সকাল ৯টা – রাত ৮টা (শুক্রবার বন্ধ)', category: 'contact' },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: setting,
    });
  }

  console.log('✅ Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
