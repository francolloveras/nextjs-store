'use client'
interface DynamicTextToHtmlProps {
  text: string
}

export default function DynamicTextToHtml({ text }: DynamicTextToHtmlProps) {
  const sections = text.split('<br><br>')

  // TODOS
  // 1. Improve text parser.
  // 2. Improve elements styles.
  // 3. Avoid hydration warning.

  return (
    <>
      {sections.map((section, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: section }} suppressHydrationWarning />
      ))}
    </>
  )
}
