export const useOpenLucidClip = () => {

  const open = (path: string, params?: Record<string, any>) => {
    if (import.meta.server) return

    const url = new URL(`lucidclip://${path}`)
    Object.entries(params ?? {}).forEach(([key, value]) => url.searchParams.append(key, value))
    window.location.href = url.toString()
  }
  return {open}
};
