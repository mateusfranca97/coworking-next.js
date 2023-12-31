interface ButtonProps {
  text: string

  // eslint-disable-next-line no-undef
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button(button: ButtonProps) {
  return (
    <button
      className="w-48 h-10 rounded-md hover:bg-green-800 hover:text-white transition-all ease-linear mb-2"
      onClick={button.onClick}
    >
      {button.text}
    </button>
  )
}
export default Button
