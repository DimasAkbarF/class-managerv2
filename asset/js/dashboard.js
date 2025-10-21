  const copyBtn = document.getElementById('copy-btn');
  const linkInput = document.getElementById('website-link');
  const copiedText = document.getElementById('copied-text');

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(linkInput.value);

      // Tampilkan teks notifikasi
      copiedText.classList.remove('opacity-0');
      copiedText.classList.add('opacity-100');

      // Hilangkan lagi setelah 2 detik
      setTimeout(() => {
        copiedText.classList.remove('opacity-100');
        copiedText.classList.add('opacity-0');
      }, 2000);
    } catch (err) {
      alert('Gagal menyalin tautan!');
    }
  });