import React from 'react'

function ComputerSvg(props) {
  return (
    <svg
    width="300px"
    height="300px"
    viewBox="0 0 79.375 79.375"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        id="filter12538"
        x={-0.49325}
        y={-0.27817}
        width={1.8684}
        height={1.3809}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.25466}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={11.4094} />
        <feOffset
          dx={-8.620689655172413}
          dy={-46.76724137931034}
          result="offset"
        />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
      <filter
        id="filter12526"
        x={-0.054378}
        y={-0.076356}
        width={1.1588}
        height={1.235}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.27329}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={11.4094} />
        <feOffset
          dx={25.215517241379317}
          dy={29.525862068965523}
          result="offset"
        />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>
    <rect
      width={79.375}
      height={79.375}
      fill="none"
      stopColor="#000000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeOpacity={0.81834}
      strokeWidth={0.52917}
    />
    <g id="computer" transform="matrix(.4065 0 0 .4065 103.88 19.011)">
      <rect
        transform="matrix(0 .30721 -.30721 0 64.68 154.44)"
        x={-181.85}
        y={600.86}
        width={72.992}
        height={266.57}
        ry={87.941}
        fill="#4d4d4d"
        filter="url(#filter12538)"
        stopColor="#000000"
      />
      <path
        transform="matrix(.30721 0 0 .30721 -90.582 240.71)"
        d="m-464.34-830.35 22.632-12.718 3.4679 12.445zm36.199-15.909h437.17c16.729 0 30.197 13.468 30.197 30.197v291.66c0 16.729-13.468 30.197-30.197 30.197h-437.17c-16.729 0-30.197-13.468-30.197-30.197v-291.66c0-16.729 13.468-30.197 30.197-30.197zm453.78 347.1-20.505 11.513-5.5938-11.185z"
        fill="#666"
        filter="url(#filter12526)"
        stopColor="#000000"
      />
      <rect
        x={-170.98}
        y={85.064}
        width={24.263}
        height={22.324}
        ry={3.7695}
        fill="#909090"
        stopColor="#000000"
      />
      <rect
        transform="matrix(0 .30721 -.30721 0 64.68 153.44)"
        x={-181.85}
        y={600.86}
        width={72.992}
        height={266.57}
        ry={87.941}
        fill="#666"
        filter="url(#filter12538)"
        stopColor="#000000"
      />
      <rect
        x={-172.99}
        y={85.114}
        width={24.263}
        height={22.324}
        ry={3.7695}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        x={-237.28}
        y={-15.983}
        width={152.85}
        height={108.15}
        ry={9.2768}
        fill="#1a1a1a"
        stopColor="#000000"
      />
      <path
        d="m-177.68-8.9276 19.902 94.042h57.147c5.3377 0 9.635-3.5975 9.635-8.0663v-77.909c0-4.4688-4.2972-8.0665-9.635-8.0665z"
        stopColor="#000000"
      />
      <rect
        x={-233.23}
        y={-11.206}
        width={141.06}
        height={94.042}
        ry={8.0664}
        fill="#fff"
        fillOpacity={0.77509}
        stopColor="#000000"
      />
      <path
        d="m-188.3 103.42c-0.4809 1.2811-1.9408 1.2658-4.2354 2.2711l-2.4218 1.4016c-1.8433 1.0668-3.3243 2.7534-4.343 1.8397-1.4678-1.3167 2.5593-4.2092 3.3208-4.6448 0 0 0.73291-0.47302 1.2763-0.7608 0.54344-0.28777 1.5112-0.72258 1.5112-0.72258 1.9684-0.98152 5.4455-0.85948 4.8917 0.61589z"
        fill="#ccc"
        fillOpacity={0.087238}
        stopColor="#000000"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeOpacity={0.91696}
        strokeWidth={0.15399}
      />
      <g id="gear-bot">
        <circle
          cx={-175.75}
          cy={48.15}
          r={13.448}
          fill="#fff"
          fillOpacity={0.86851}
          stopColor="#000000"
        />
        <path
          d="m-178.97 26.848-4.6504 1.246 1.1235 4.1929a17.465 17.208 0 0 0-3.6604 2.0556l-3.0328-3.0328-3.4043 3.4043 2.9805 2.9805a17.465 17.208 0 0 0-2.1757 3.6666l-4.0205-1.0773-1.246 4.6504 3.9845 1.0676a17.465 17.208 0 0 0-0.14747 2.148 17.465 17.208 0 0 0 0.14747 2.148l-3.9845 1.0676 1.246 4.6504 4.0205-1.0773a17.465 17.208 0 0 0 2.1757 3.6666l-2.9805 2.9805 3.4043 3.4043 3.0328-3.0328a17.465 17.208 0 0 0 3.6604 2.0556l-1.1235 4.1929 4.6504 1.246 1.1329-4.2283a17.465 17.208 0 0 0 2.0827 0.13442 17.465 17.208 0 0 0 2.0828-0.13442l1.1329 4.2283 4.6504-1.246-1.1235-4.1929a17.465 17.208 0 0 0 3.6603-2.0556l3.0328 3.0328 3.4043-3.4043-2.9805-2.9805a17.465 17.208 0 0 0 2.1757-3.6665l4.0205 1.0772 1.2461-4.6504-3.9845-1.0676a17.465 17.208 0 0 0 0.14747-2.148 17.465 17.208 0 0 0-0.13726-2.1508l3.9743-1.0649-1.2461-4.6504-4.009 1.0742a17.465 17.208 0 0 0-2.1811-3.6695l2.9745-2.9745-3.4043-3.4043-3.0249 3.0249a17.465 17.208 0 0 0-3.666-2.0563l1.1212-4.1842-4.6504-1.246-1.1302 4.218a17.465 17.208 0 0 0-2.0855-0.12421 17.465 17.208 0 0 0-2.0827 0.13442z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.10252}
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={14.861}
          fill="#1a1a1a"
          fillOpacity={0.11765}
          stopColor="#000000"
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={6.5797}
          fill="#1a1a1a"
          fillOpacity={0.11765}
          stopColor="#000000"
        />
        <circle
          cx={-175.75}
          cy={48.15}
          r={2.9634}
          fill="#e7e7e7"
          stopColor="#000000"
        />
      </g>
      <g id="gear-top">
        <path
          d="m-148.27 2.9568-4.6504 1.246 1.1235 4.1929a17.465 17.208 0 0 0-3.6604 2.0556l-3.0328-3.0328-3.4043 3.4043 2.9805 2.9805a17.465 17.208 0 0 0-2.1757 3.6666l-4.0205-1.0773-1.246 4.6504 3.9845 1.0676a17.465 17.208 0 0 0-0.14747 2.148 17.465 17.208 0 0 0 0.14747 2.148l-3.9845 1.0676 1.246 4.6504 4.0205-1.0773a17.465 17.208 0 0 0 2.1757 3.6666l-2.9805 2.9805 3.4043 3.4043 3.0328-3.0328a17.465 17.208 0 0 0 3.6604 2.0556l-1.1235 4.1929 4.6504 1.246 1.1329-4.2283a17.465 17.208 0 0 0 2.0827 0.13442 17.465 17.208 0 0 0 2.0828-0.13442l1.1329 4.2283 4.6504-1.246-1.1235-4.1929a17.465 17.208 0 0 0 3.6603-2.0556l3.0328 3.0328 3.4043-3.4043-2.9805-2.9805a17.465 17.208 0 0 0 2.1757-3.6665l4.0205 1.0772 1.2461-4.6504-3.9845-1.0676a17.465 17.208 0 0 0 0.14747-2.148 17.465 17.208 0 0 0-0.13726-2.1508l3.9743-1.0649-1.2461-4.6504-4.009 1.0742a17.465 17.208 0 0 0-2.1811-3.6695l2.9744-2.9745-3.4043-3.4043-3.0248 3.0249a17.465 17.208 0 0 0-3.666-2.0563l1.1212-4.1842-4.6504-1.246-1.1302 4.218a17.465 17.208 0 0 0-2.0855-0.12421 17.465 17.208 0 0 0-2.0827 0.13442z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.10252}
        />
        <circle
          cx={-151.21}
          cy={17.457}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-138.89}
          cy={17.457}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-138.89}
          cy={31.06}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
        <circle
          cx={-151.21}
          cy={31.06}
          r={3.7466}
          fill="#e7e7e7"
          stopColor="#000000"
        />
      </g>
    </g>
  </svg>
  )
}

function PhoneSvg(props) {
  return (
    <svg
    width="79.375mm"
    height="79.375mm"
    viewBox="0 0 79.375 79.375"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        id="filter2791"
        x={-0.05888}
        y={-0.033761}
        width={1.1793}
        height={1.114}
        colorInterpolationFilters="sRGB"
      >
        <feFlood
          floodColor="rgb(0,0,0)"
          floodOpacity={0.27843}
          result="flood"
        />
        <feComposite
          in="flood"
          in2="SourceGraphic"
          operator="in"
          result="composite1"
        />
        <feGaussianBlur in="composite1" result="blur" stdDeviation={10} />
        <feOffset dx={25.0831} dy={33.0565} result="offset" />
        <feComposite in="SourceGraphic" in2="offset" result="composite2" />
      </filter>
    </defs>
    <rect
      width={79.375}
      height={79.375}
      fill="none"
      stopColor="#000000"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeOpacity={0.81834}
      strokeWidth={0.52917}
    />
    <g id="phone" transform="matrix(.34916 0 0 .34916 175.41 -.20732)">
      <g
        transform="matrix(-.20488 .10839 .10839 .20488 -527.5 367.69)"
        fill="#666"
        filter="url(#filter2791)"
      >
        <path
          d="m-843.15-349.43-21.375 14.788-3.028-12.332"
          stopColor="#000000"
        />
        <path
          d="m-1235.4-1025.3 19.036-13.178 3.4183 12.229"
          stopColor="#000000"
        />
        <rect
          x={-1232.8}
          y={-1045.5}
          width={405.03}
          height={703.89}
          ry={38.787}
          stopColor="#000000"
        />
      </g>
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={347.68}
        y={-160.7}
        width={93.882}
        height={163.15}
        ry={8.9904}
        fill="#1a1a1a"
        stopColor="#000000"
      />
      <path
        d="m-388.81 30.05c-0.83322 0.13117-1.6604 0.39263-2.4498 0.8102l-60.728 32.128c-3.8219 2.0219-5.2709 6.7266-3.2489 10.548l57.144 108.01 9.8967-150.35-0.57159-1.0806c-0.013-0.02478-0.0292-0.04682-0.0425-0.07139z"
        stopColor="#000000"
      />
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={352.47}
        y={-155.69}
        width={84.312}
        height={141.64}
        ry={7.8047}
        fill="#fff"
        fillOpacity={0.77647}
        stopColor="#000000"
      />
      <circle
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        cx={394.62}
        cy={-5.805}
        r={4.9573}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        transform="matrix(-.88392 .46763 .46763 .88392 0 0)"
        x={387.87}
        y={-159.42}
        width={13.514}
        height={1.9481}
        ry={0.97403}
        fill="#666"
        stopColor="#000000"
      />
      <rect
        transform="rotate(-29.197)"
        x={-396.3}
        y={-16.779}
        width={3.8268}
        height={3.8268}
        fill="none"
        stopColor="#000000"
        stroke="#999"
        strokeLinecap="square"
        strokeLinejoin="bevel"
        strokeOpacity={0.81834}
        strokeWidth={0.18398}
      />
      <g id="gear-phone">
        <path
          d="m-398.16 96.45-2.6618 2.4718 2.2287 2.3999a12.983 13.177 62.119 0 0-1.7159 2.6624l-3.0927-0.95259-1.0693 3.4716 3.0393 0.93613a12.983 13.177 62.119 0 0-0.15725 3.2129l-3.0615 0.70011 0.80978 3.5411 3.0341-0.69387a12.983 13.177 62.119 0 0 0.65953 1.4846 12.983 13.177 62.119 0 0 0.85623 1.3805l-2.2807 2.1179 2.4718 2.6618 2.3014-2.1371a12.983 13.177 62.119 0 0 2.7446 1.6777l-0.9361 3.0393 3.4716 1.0693 0.95259-3.0927a12.983 13.177 62.119 0 0 3.1665 0.0794l0.73012 3.1928 3.5411-0.80978-0.73635-3.2196a12.983 13.177 62.119 0 0 1.4364-0.64528 12.983 13.177 62.119 0 0 1.3417-0.82447l2.2474 2.4202 2.6618-2.4718-2.2287-2.4a12.983 13.177 62.119 0 0 1.7159-2.6624l3.0928 0.95257 1.0693-3.4716-3.0393-0.93613a12.983 13.177 62.119 0 0 0.15726-3.2129l3.0614-0.70005-0.80967-3.5412-3.0341 0.69385a12.983 13.177 62.119 0 0-0.65951-1.4845 12.983 13.177 62.119 0 0-0.85046-1.386l2.2749-2.1125-2.4719-2.6617-2.2946 2.131a12.983 13.177 62.119 0 0-2.7494-1.6778l0.93434-3.0332-3.4716-1.0693-0.9501 3.0847a12.983 13.177 62.119 0 0-3.1705-0.07796l-0.72859-3.186-3.5411 0.80978 0.7345 3.2118a12.983 13.177 62.119 0 0-1.4347 0.65304 12.983 13.177 62.119 0 0-1.3416 0.82453zm5.1723 6.9323 2.4808 4.6893a2.4773 2.4773 0 0 0-0.46831 1.5052l-4.6837 2.4779a6.4166 6.4166 0 0 1 2.6712-8.6723zm1.9375-1.025a6.4166 6.4166 0 0 1 8.6724 2.6711l-4.6826 2.4773a2.4773 2.4773 0 0 0-1.5094-0.45983zm-3.5711 11.658 4.6837-2.4779a2.4773 2.4773 0 0 0 1.5078 0.45971l2.4808 4.6893a6.4166 6.4166 0 0 1-8.6723-2.6711zm8.5974-4.5484 4.6837-2.4779a6.4166 6.4166 0 0 1-2.6712 8.6724l-2.4808-4.6892a2.4773 2.4773 0 0 0 0.46835-1.5053z"
          fill="#1a1a1a"
          fillOpacity={0.19204}
          stopColor="#000000"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeOpacity={0.91696}
          strokeWidth={0.077354}
        />
        <circle
          cx={-388.5}
          cy={109.52}
          r={1.3166}
          fill="#f2f2f2"
          fillOpacity={0.3045}
          stopColor="#000000"
        />
      </g>
    </g>
  </svg>

  )
}

function TitleSvg (props) {
  return(
  <svg
  width="140px"
  height="35px"
  viewBox="0 0 47.312 11.906"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <g transform="translate(-70.953 -118.55)">
    <g
      fill="#f8fafc"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    >
      <path d="m107.88 127.17-0.39877 0.53917c0.31722 0.91649 0.63475 1.8332 0.95197 2.7496h0.58477c-0.37937-1.096-0.75862-2.1928-1.138-3.2888z" />
      <path d="m103.58 126.58-2.8017 3.8718h1.2231l1.9891-2.7496z" />
      <path d="m85.98 126.3c-0.1495 0.73525-0.36774 1.2752-0.65547 1.6163-0.29681 0.35663-0.62503 0.53543-0.98492 0.53543-0.35581 0-0.61815-0.18099-0.78656-0.54293-0.0067-0.015-0.01196-0.033-0.0178-0.0488-4e-3 0.0208-0.0093 0.0401-0.01326 0.0613-0.14366 0.75583-0.13344 1.3156 0.03081 1.6776 0.16842 0.36194 0.43076 0.54293 0.78656 0.54293 0.3599 0 0.68812-0.1788 0.98492-0.53543 0.30089-0.35662 0.52633-0.92857 0.67606-1.7163 0.13376-0.70381 0.12564-1.2331-0.0206-1.59z" />
      <path d="m98.272 126.25c-0.26633 1.4013-0.53257 2.8032-0.79891 4.2045h0.3212c0.19898-1.0468 0.3975-2.0944 0.59645-3.1412 0.07292-0.38324 0.07013-0.66812-0.0093-0.85442-0.03122-0.0814-0.06801-0.15014-0.10984-0.20891z" />
      <path d="m93.999 126.21-0.80716 4.2458h0.32122l0.56693-2.9811c0.07079-0.3726 0.10214-0.62503 0.0947-0.7581-0.01196-0.21034-0.07146-0.37943-0.1757-0.50665z" />
      <path d="m102.51 121.98 0.61841 1.6901h2.3446l0.58752 2.3631c-0.23593 0.33762 1.888-2.7007 1.6521-2.3631h1.5038l1.2505-1.6901h-2.7543c0.23594-0.33762-1.888 2.7007-1.6521 2.3631l-0.58752-2.3631z" />
      <path d="m95.152 121.78c-0.4826 0-0.91631 0.10952-1.3013 0.32776-0.38092 0.21823-0.78822 0.5858-1.2217 1.1021 0.07836-0.41251 0.15702-0.82596 0.23542-1.2385h-2.3316c-0.53718 2.8264-1.0744 5.654-1.6116 8.4804h0.32121c0.43012-2.263 0.86025-4.526 1.2904-6.7891h2.3316c-0.07836 0.41251-0.15702 0.8247-0.23542 1.2372 0.43349-0.51631 0.84079-0.88387 1.2217-1.1021 0.38501-0.21826 0.81873-0.32776 1.3013-0.32776 0.5194 0 0.90762 0.12078 1.1648 0.36029 0.25711 0.23953 0.43665 0.59586 0.53879 1.0696 0.49783-0.55356 0.92708-0.92895 1.2876-1.1259 0.36151-0.20226 0.77956-0.30399 1.254-0.30399 0.69934 0 1.1938 0.27147 1.4832 0.81439 0.0731 0.13535 0.13003 0.29124 0.1709 0.46536 0.14302-0.95899 0.0867-1.6784-0.1709-2.1554-0.28944-0.54292-0.78388-0.81439-1.4832-0.81439-0.47441 0-0.89246 0.10172-1.254 0.30399-0.36052 0.19693-0.78978 0.57231-1.2876 1.1259-0.10214-0.47373-0.28168-0.83006-0.53879-1.0696-0.25712-0.23951-0.64535-0.36028-1.1648-0.36028z" />
      <path d="m85.588 121.78c-1.141 0-2.1269 0.42124-2.9575 1.2622-0.82954 0.83568-1.3671 1.9003-1.6129 3.1938-0.138 0.72607-0.15234 1.3784-0.04596 1.959 0.01341-0.0888 0.02869-0.17785 0.04596-0.26896 0.24582-1.2934 0.78338-2.3581 1.6129-3.1938 0.83057-0.84099 1.8165-1.2622 2.9575-1.2622 1.3046 0 2.1966 0.4927 2.6761 1.4774 0.13828 0.28486 0.23701 0.59349 0.29718 0.92573 0.14963-1.0229 0.05233-1.8957-0.29718-2.6158-0.47947-0.98471-1.3715-1.4774-2.6761-1.4774z" />
      <g id="three-g">
        <path d="m112.7 126.93c-0.029 5e-3 -2.5497 0.42674-2.5786 0.43158 0.022 0.643 0.11648 1.1899 0.28278 1.6425 0.45902-0.0767 2.2701-0.37974 2.2959-0.38405-0.0263 0.6547 0.0383 1.1093 0.19424 1.3648 0.16103 0.25017 0.40099 0.3753 0.71998 0.3753 0.33537 0 0.64368-0.15975 0.92521-0.47913 0.2856-0.31936 0.47946-0.74497 0.58067-1.2772 0.1032-0.54292 0.0742-0.96291-0.0858-1.261-5e-3 -9e-3 -0.0106-0.0172-0.0158-0.0262-0.11024 0.34846-0.26974 0.64035-0.47907 0.87444-0.28154 0.31936-0.58985 0.47912-0.92521 0.47912-0.31899 0-0.55895-0.12513-0.71998-0.3753-0.15593-0.25549-0.22052-0.71011-0.19425-1.3648z" />
        <path d="m117.48 124.8c-0.27236 0.33612-0.61538 0.63664-1.0309 0.89946 0.32637 0.11177 0.56703 0.24126 0.72273 0.39031 0.21764 0.206 0.37408 0.47043 0.47016 0.79062 9e-3 -0.0443 0.0203-0.0881 0.0288-0.13262 0.1032-0.54292 0.10745-1.0088 0.0137-1.3973-0.0461-0.20441-0.11422-0.38759-0.20454-0.55043z" />
        <path d="m115.45 122.39c-0.0733 0.11477-0.16099 0.22194-0.26219 0.32275-0.26834 0.27146-0.56577 0.40657-0.89294 0.40657-0.0777 0-0.18377-0.0133-0.31778-0.04-0.12671 0.51631-0.4436 1.808-0.57037 2.3243 0.16786-0.0583 0.31537-0.10217 0.44751-0.13385 0.0412-0.16752 0.0956-0.38923 0.12286-0.5004 0.13401 0.0266 0.24008 0.04 0.31778 0.04 0.32717 0 0.6246-0.1351 0.89294-0.40657 0.27247-0.27146 0.44398-0.59441 0.51477-0.967 0.0677-0.35663 0.0401-0.64026-0.083-0.85317-0.0456-0.0787-0.10174-0.14304-0.16953-0.19265z" />
        <path d="m115.43 118.55c-1.0224 0-1.8636 0.26148-2.523 0.78312-0.65535 0.52162-1.1742 1.2724-1.5567 2.2518-0.012-3e-3 0.43574 0.10666 0.81883 0.20015 0.22336-0.29196 0.4683-0.54732 0.73783-0.76185 0.65943-0.52163 1.5006-0.78186 2.523-0.78186 1.1738 0 1.9678 0.28363 2.383 0.85316 0.14722 0.2019 0.25777 0.42308 0.33219 0.66178 0.0166-0.067 0.0323-0.13516 0.0453-0.20391 0.16389-0.86228 0.0377-1.5784-0.37749-2.1479-0.41525-0.56953-1.2093-0.85442-2.383-0.85442z" />
      </g>
      <path d="m73.178 120.44h4.1284c0.81384 0 1.4425 0.14417 1.8868 0.4316 0.44841 0.28742 0.78531 0.69962 1.0103 1.2372 0.15719 0.37558 0.26128 0.79465 0.31435 1.256 0.03282-0.36639 0.04622-0.72328 0.04051-1.0696-0.01196-0.71325-0.1299-1.3389-0.35484-1.8765-0.22501-0.5376-0.56191-0.94979-1.0103-1.2372-0.44432-0.28743-1.0729-0.43159-1.8868-0.43159h-4.1284z" />
      <path d="m73.178 120.44v-1.6901h-8.29e-4l-2.2244 11.705h0.32121l1.9033-10.015z" />
      <path d="m76.615 127.18c-0.1287 0.1553-0.26562 0.27781-0.41041 0.3666-0.27674 0.165-0.70553 0.24771-1.2863 0.24771h-0.35953l1.08e-4 -8.3e-4 -0.32098-4.1e-4 -2.07e-4 1.6899-2.08e-4 1e-3h0.68083c0.58073 0 1.0095-0.0827 1.2863-0.24771 0.14478-0.0888 0.28175-0.2113 0.4104-0.36659z" />
      <path d="m77.724 123.15c-0.01633 0.55871-0.07808 0.86085-0.07808 0.86085l4.15e-4 2e-3c-1.56e-4 -8.3e-4 -2.07e-4 -1e-3 -4.15e-4 -2e-3 -0.0275 0.19702-0.0594 0.40213-0.10164 0.62426-0.17806 0.9368-0.37682 1.6149-0.5958 2.0354-0.1044 0.19877-0.21536 0.369-0.33351 0.51163v1.6901c0.1182-0.14263 0.22917-0.31287 0.33351-0.51163 0.21898-0.4205 0.41774-1.0986 0.5958-2.0354 0.13923-0.73256 0.19761-1.3278 0.17618-1.7869l4.15e-4 3e-3z" />
    </g>
  </g>
</svg>
)}

export {ComputerSvg, PhoneSvg, TitleSvg }
