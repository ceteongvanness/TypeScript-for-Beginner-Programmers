import React from 'react'

const SvgBadExample = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 36 36" {...props}>
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <path
        d="M27.287,34.627006 C26.883,34.627006 26.481,34.503 26.135,34.256 L18,28.422 L9.865,34.256 C9.172,34.752 8.242,34.752 7.553,34.248 C6.864,33.749 6.574,32.863 6.832,32.054 L9.866,22.262 L1.804,16.581 C1.119,16.076 0.834,15.188 1.096,14.378 C1.36,13.57 2.112,13.021 2.962,13.015 L12.947,13 L16.126,3.451 C16.394,2.642 17.149,2.098 18,2.098 C18.851,2.098 19.606,2.643 19.875,3.451 L23,13 L33.036,13.015 C33.889,13.021 34.642,13.571 34.903,14.378 C35.166,15.188 34.881,16.076 34.195,16.581 L26.133,22.262 L29.167,32.054 C29.427,32.863 29.134,33.749 28.447,34.248 C28.1,34.502 27.694,34.627006 27.287,34.627006 Z"
        fill="#FFAC33"
        fillRule="nonzero"
      />
      <path
        d="M21.2778382,25 C21.1352502,25 20.993368,24.954254 20.8712505,24.8631353 L18.0000777,22.7109638 L15.128905,24.8631353 C14.8843171,25.0461105 14.5560822,25.0461105 14.312906,24.8601841 C14.0697299,24.6761022 13.9673771,24.3492555 14.0584358,24.0508142 L15.1292579,20.4385304 L12.2838498,18.3428008 C12.0420854,18.1565056 11.9414973,17.828921 12.0339678,17.5301108 C12.1271442,17.2320383 12.3925556,17.0295114 12.6925552,17.027298 L16.2166683,17.0217645 L17.3386668,13.4991238 C17.4332549,13.2006824 17.6997252,13 18.0000777,13 C18.3004303,13 18.5669005,13.2010513 18.6618416,13.4991238 L19.7647813,17.0217645 L23.3068944,17.027298 C23.6079528,17.0295114 23.8737172,17.2324072 23.9658347,17.5301108 C24.0586582,17.828921 23.95807,18.1565056 23.7159527,18.3428008 L20.8705446,20.4385304 L21.9413668,24.0508142 C22.0331314,24.3492555 21.9297197,24.6761022 21.6872494,24.8601841 C21.564779,24.9538851 21.4214851,25 21.2778382,25 Z"
        fill="#FFFFFF"
        fillRule="nonzero"
      />
      <circle fill="#806538" cx={18} cy={4} r={4} />
      <circle fill="#DB4003" cx={28} cy={32} r={4} />
      <circle fill="#009795" cx={8} cy={32} r={4} />
      <circle fill="#009795" cx={32} cy={15} r={4} />
      <circle fill="#DB4003" cx={4} cy={15} r={4} />
    </g>
  </svg>
)

export default SvgBadExample