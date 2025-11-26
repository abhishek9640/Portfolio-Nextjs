const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const imagesToOptimize = ['editzen.png', 'travel.png', 'digital_lib.png', 'imaginify.png', 'dp.png'];

async function optimizeImages() {
  for (const image of imagesToOptimize) {
    const inputPath = path.join(publicDir, image);
    const outputPath = path.join(publicDir, image.replace('.png', '_backup.png'));
    
    // Skip if doesn't exist
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${image} - file not found`);
      continue;
    }
    
    // Backup original
    fs.copyFileSync(inputPath, outputPath);
    console.log(`📦 Backed up ${image} to ${image.replace('.png', '_backup.png')}`);
    
    // Optimize and resize
    await sharp(inputPath)
      .resize(1920, 1080, { // Max dimensions
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: 85 }) // Convert to WebP for better compression
      .toFile(inputPath.replace('.png', '.webp'));
    
    console.log(`✅ Optimized ${image} -> ${image.replace('.png', '.webp')}`);
    
    // Also create optimized PNG version
    await sharp(inputPath)
      .resize(1920, 1080, { 
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(inputPath + '.tmp');
    
    // Replace original with optimized  
    fs.renameSync(inputPath + '.tmp', inputPath);
    console.log(`✅ Optimized PNG ${image}`);
  }
  
  console.log('\n🎉 All images optimized!');
}

optimizeImages().catch(console.error);
