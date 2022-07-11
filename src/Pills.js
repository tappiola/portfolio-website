
export const Pills = ({pills, color}) => {
    return <>{pills.map((p) => <p className={`rounded-3xl
      px-2
      py-0.5
      my-2
      mr-2
      text-${color}
      border-${color}
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