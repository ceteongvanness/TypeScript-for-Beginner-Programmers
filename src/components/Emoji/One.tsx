import React from 'react'

const SvgOne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <path
      fill="#3B88C3"
      d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"
    />
    <path
      fill="#FFF"
      d="M16.462 11.175h-1.829c-1.488 0-2.108-1.085-2.108-2.139 0-1.085.775-2.14 2.108-2.14h4.402c1.334 0 2.078.961 2.078 2.201V26.74c0 1.551-.992 2.418-2.326 2.418-1.333 0-2.325-.867-2.325-2.418V11.175z"
    />
  </svg>
)

export default SvgOne