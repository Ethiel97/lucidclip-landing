export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    // Remove leading # if present
    const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return {
    scrollToSection
  }
}
