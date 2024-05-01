import { ref, onMounted } from 'vue';

export function useDarkMode() {
  const isDarkMode = ref(false);

  onMounted(() => {
    // Ensure this code runs only on the client side
    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      isDarkMode.value = matchMedia.matches;
      document.body.classList.toggle('dark', isDarkMode.value);

      // Listener for changes
      const handler = (e: MediaQueryListEvent) => {
        isDarkMode.value = e.matches;
        document.body.classList.toggle('dark', e.matches);
      };

      matchMedia.addEventListener('change', handler);

      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        matchMedia.removeEventListener('change', handler);
      };
    }
  });

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark', isDarkMode.value);
    }
  };

  return { isDarkMode, toggleDarkMode };
}
