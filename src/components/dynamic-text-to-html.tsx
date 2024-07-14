'use client'
interface DynamicTextToHtmlProps {
  text: string
}

export default function DynamicTextToHtml({ text }: DynamicTextToHtmlProps) {
  const sections = text.split('<br><br>')

  return (
    <>
      {sections.map((section, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: section }} suppressHydrationWarning />
      ))}
    </>
  )
}
