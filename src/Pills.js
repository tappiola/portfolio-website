export const Pills = ({pills, color}) => {
    return <>{pills.map((p) => <p key={p} className={`rounded-md
      px-2
      py-0.25
      my-1.5
      mr-2
      ${color === 'teal' ? 'text-lime-300': 'text-teal-500'}
      ${color === 'teal' ? 'border-lime-300': 'border-teal-500'}
      border-2
      text-xs
      uppercase
      font-medium
      leading-5
      tracking-wider
      inline-block
      `}>
        {p}
        </p>
    )}</>
}