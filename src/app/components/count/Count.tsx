interface countProps {
  count?: number
  text: string
}

function Count(props: countProps) {
  return (
    <div className="w-40 h-20 bg-slate-600 rounded text-white p-3 space-y-2">
      <p className="text-lg">{props.count}</p>
      <p className="text-xs">{props.text}</p>
    </div>
  )
}

export default Count
