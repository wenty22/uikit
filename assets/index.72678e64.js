import{j as n,b as o,F as i,R as I,r as f,L as gn,f as bn,h as fn,i as xn,B as yn,l as wn,t as B,N as Tn,m as C,n as nn,O as vn,o as Cn,p as w,q as In,H as Bn}from"./react.2fc510b6.js";import{I as Sn,u as kn,F as u,C as S,S as Mn,M as jn,H as Pn,L as tn,a as En,b as on,c as Dn,d as rn,B as cn,Q as Nn,e as Ln,f as Rn,g as On,h as zn,i as d,T as g,j as Fn,k as b,A as _n,D as An,l as $n,R as Vn,W as Hn,m as Xn,V as y,n as Gn,o as Wn,p as Qn}from"./tote.6fbc5bb9.js";import"./vendor.dd23d6ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerpolicy&&(a.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?a.credentials="include":c.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(c){if(c.ep)return;c.ep=!0;const a=r(c);fetch(c.href,a)}})();const an={config:{useSystemColorMode:!1,initialColorMode:"system",storageType:"localStorage",storageKey:"docs-color-mode"}},qn=t=>n(Sn,{viewBox:"0 0 20 20",fill:"currentColor",...t,children:n("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"})});function Un(){const{colorMode:t,toggleColorMode:e}=kn();return o(u,{borderRadius:24,w:72,h:40,bg:"bg.bottom",px:4,alignItems:"center",justifyContent:"space-between",onClick:e,cursor:"pointer",children:[n(S,{boxSize:32,bg:t==="light"?"scene.primary.normal":void 0,color:"dark.readable.normal",children:n(Mn,{})}),n(S,{boxSize:32,bg:t==="dark"?"scene.primary.normal":void 0,color:t==="dark"?"dark.readable.normal":void 0,children:n(jn,{})})]})}function Kn(){return o(i,{children:[n(u,{h:68}),n(u,{h:68,right:0,left:220,top:0,position:"fixed",zIndex:9,bg:"bg.middle",justifyContent:"flex-end",alignItems:"center",borderLeft:"1px solid",borderBottom:"1px solid",borderColor:"readable.border",px:16,children:o(Pn,{spacing:16,children:[n(tn,{href:"https://github.com/node-real/tote/tree/v2",isExternal:!0,display:"inline-flex",children:n(En,{variant:"text",icon:n(qn,{}),color:"readable.normal"})}),n(Un,{})]})})]})}const Yn={React:I,...on,...Dn,...I},ln={position:"relative",marginTop:12,marginBottom:12,borderRadius:8,padding:10,background:"#011627",sx:{"> pre":{w:"100%",overflowX:"auto",".token-line:first-of-type:last-of-type":{lineHeight:"24px"}}}},Jn={marginTop:12,marginBottom:12,borderRadius:8,padding:10,borderWidth:1};function dn({code:t}){const{hasCopied:e,onCopy:r}=rn(t);return n(cn,{size:"sm",onClick:r,position:"absolute",top:10,right:10,children:e?"COPIED":"COPY"})}function Zn(t){const{folder:e,children:r}=t;return e?n(Nn,{children:o(Ln,{children:[o(Rn,{children:["code",n(On,{})]}),n(zn,{p:0,children:r})]})}):n(i,{children:r})}function et(t){const{rawCode:e,language:r,folderCode:l,...c}=t,[a,s]=f.exports.useState(e),p=h=>{s(h.trim())},m={code:a,scope:Yn,...c};return o(gn,{...m,children:[n(bn,{style:Jn}),o(Zn,{folder:l,children:[o(d,{...ln,children:[n(fn,{onChange:p}),n(dn,{code:a})]}),n(xn,{})]})]})}function nt(t){const{rawCode:e,language:r,...l}=t;return n(yn,{...wn,code:e,language:r,...l,children:({className:c,style:a,tokens:s,getLineProps:p,getTokenProps:m})=>o(d,{...ln,"data-language":r,children:[n("pre",{className:c,style:a,children:s.map((h,x)=>n("div",{...p({line:h,key:x}),children:h.map((mn,pn)=>n("span",{...m({token:mn,key:pn})}))}))}),n(dn,{code:e})]})})}function tt(t){const[e,r]=f.exports.useState(!1);f.exports.useEffect(()=>{r(!0)},[]);const{children:l,className:c,live:a=!0,folder:s=!1}=t,p=a==="true"||a===!0,m=s==="true"||s===!0,h=c==null?void 0:c.replace("language-",""),x=l.trim();return e&&p&&h==="jsx"?n(et,{rawCode:x,language:h,theme:B,folderCode:m}):n(nt,{rawCode:x,language:h,theme:B})}function T(t){const{name:e,value:r}=t;return o(u,{mt:6,children:[o(g,{fontWeight:600,width:112,flexShrink:0,display:"inline-block",children:[e,":"]}),n(g,{display:"inline-block",children:r+""})]})}function ot(t){const{data:e}=t;return n(d,{mt:12,children:e.map((r,l)=>o(d,{py:12,borderBottom:"1px solid",borderColor:"readable.border",children:[o(d,{children:[n(d,{bg:"scene.primary.opacity",color:"scene.primary.normal",as:"span",py:4,px:8,borderRadius:4,children:r.name}),r.required&&n(d,{ml:16,bg:"scene.warning.opacity",color:"scene.warning.normal",as:"span",py:4,px:8,borderRadius:4,children:"required"})]}),o(d,{children:[r.type!==void 0&&n(T,{name:"Type",value:r.type}),r.default!==void 0&&n(T,{name:"Default",value:r.default}),r.desc!==void 0&&n(T,{name:"Description",value:r.desc})]})]},l))})}function rt(){const{hasCopied:t,onCopy:e,setValue:r,value:l}=rn("");f.exports.useEffect(()=>{l&&e()},[l,e]);const c=a=>{r(a)};return n(Fn,{columns:5,gap:12,mt:12,children:Object.entries(on).map(([a,s],p)=>{if(a==="createIcon"||a==="Icon")return null;const m=`<${a} />`;return o(cn,{variant:"ghost",flexDirection:"column",borderWidth:1,borderRadius:8,p:12,h:80,onClick:()=>c(m),cursor:"pointer",position:"relative",overflow:"hidden",children:[n(s,{size:"plus"}),n(g,{textAlign:"center",children:a}),t&&l===m&&n(g,{position:"absolute",top:0,right:0,bg:"scene.primary.normal",color:"#fff",borderBottomLeftRadius:8,px:8,py:4,children:"Copied"})]},p)})})}const it={PropsTable:ot,AllIcons:rt,h1:t=>n(b,{fontSize:"t1",fontWeight:"semibold",py:12,...t}),h2:t=>{const{children:e,...r}=t;return o(b,{fontSize:"t2",py:12,position:"relative",...r,children:[n(d,{as:"span",id:e,position:"absolute",top:-68}),e]})},h3:t=>n(b,{fontSize:"b",py:12,...t}),h4:t=>n(b,{fontSize:"b2",py:12,...t}),code:t=>t.className?n(tt,{...t}):n(g,{as:"span",...t,color:"scene.danger.normal"}),pre:t=>n(d,{...t}),p:t=>n(g,{as:"p",...t}),table:t=>n(d,{as:"table",w:"100%",textAlign:"left",style:{tableLayout:"fixed"},...t}),thead:t=>n(d,{as:"thead",bg:"readable.border",p:8,...t}),tr:t=>n(d,{as:"tr",borderBottom:"1px solid readable.border",...t}),th:t=>n(d,{as:"th",p:12,...t}),td:t=>n(d,{as:"td",p:12,...t}),ul:t=>n("ul",{style:{paddingLeft:24},...t}),a:t=>n(tn,{...t})};function sn(t){const e=[];return t.forEach(r=>{e.push(r),r.children&&e.push(...sn(r.children))}),e}function hn(t,e=""){return t.forEach(r=>{const l=`${e}${r.path.startsWith("/")?"":"/"}${r.path}`;r.path=l,r.children&&hn(r.children,l),r.redirect?r.element=n(Tn,{to:r.redirect,replace:!0}):r.element&&(r.element=n(r.element,{components:it}))}),t}function ct(){const{hash:t}=C();f.exports.useEffect(()=>{let e;return t&&(e=setTimeout(()=>{const r=document.querySelector(t);r==null||r.scrollIntoView()},500)),()=>{clearTimeout(e)}},[t])}function k(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||lt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Fade"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Fade } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Fade in={isOpen}>
        <Box p={40} color="white" mt="12" bg="scene.success.normal" borderRadius={8}>
          Some Text
        </Box>
      </Fade>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"in",type:"boolean",desc:"Show the component; triggers when enter or exit states."},{name:"unmountOnExit",type:"boolean",default:!1,desc:"If true, the element will unmount when `in={false}` and animation is done."}]})]})}function at(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(k,t)})):k(t)}function lt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function M(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||st("PropsTable",!0),o(i,{children:[n(e.h1,{children:"ScaleFade"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ScaleFade } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <ScaleFade initialScale={0.9} in={isOpen}>
        <Box p={40} color="white" mt="12" bg="scene.success.normal" borderRadius={8}>
          Some Text
        </Box>
      </ScaleFade>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"in",type:"boolean",desc:"Show the component; triggers when enter or exit states."},{name:"unmountOnExit",type:"boolean",default:!1,desc:"If true, the element will unmount when `in={false}` and animation is done."},{name:"initialScale",type:"number",default:.95,desc:"The initial scale of the element."}]})]})}function dt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(M,t)})):M(t)}function st(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function j(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||ut("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Slide"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Slide } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <Slide direction="right" in={isOpen} zIndex={9999} top={0} right={0}>
        <Box
          p={40}
          h="100vh"
          w={200}
          color="white"
          bg="scene.success.normal"
          borderLeftRadius={8}
        ></Box>
      </Slide>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Direction"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  function Component(props) {
    const { direction, ...restProps } = props;
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box>
        <Button onClick={onToggle}>{direction}</Button>

        <Slide direction={direction} in={isOpen} zIndex={9999} {...restProps}>
          <Box p={40} boxSize={'100%'} color="white" bg="scene.success.normal">
            {direction}
          </Box>
        </Slide>
      </Box>
    );
  }

  return (
    <HStack>
      <Component direction="right" right={0} top={0} h="100vh" />
      <Component direction="bottom" bottom={0} left={0} w="100vw" />
      <Component direction="left" left={0} top={0} h="100vh" />
      <Component direction="top" top={0} left={0} w="100vw" />
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"in",type:"boolean",desc:"Show the component; triggers when enter or exit states."},{name:"unmountOnExit",type:"boolean",default:!1,desc:"If true, the element will unmount when `in={false}` and animation is done."},{name:"direction",type:"'top' | 'right' | 'bottom' | 'left'",default:"right",desc:"The direction to slide from."}]})]})}function ht(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(j,t)})):j(t)}function ut(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function P(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||pt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"SlideFade"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { SlideFade } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <SlideFade in={isOpen} offsetY="20px">
        <Box p={40} color="white" mt="12" bg="scene.success.normal" borderRadius={8}>
          Some Text
        </Box>
      </SlideFade>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"in",type:"boolean",desc:"Show the component; triggers when enter or exit states."},{name:"unmountOnExit",type:"boolean",default:!1,desc:"If true, the element will unmount when `in={false}` and animation is done."},{name:"offsetX",type:"string | number",default:"0",desc:"The offset on the horizontal or x axis."},{name:"offsetY",type:"string | number",default:"8px",desc:"The offset on the horizontal or y axis."}]})]})}function mt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(P,t)})):P(t)}function pt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function E(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||bt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Collapse"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Collapse } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Collapse in={isOpen}>
        <Box p={40} color="white" mt="12" bg="scene.success.normal" borderRadius={8}>
          Some Text
        </Box>
      </Collapse>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"in",type:"boolean",desc:"Show the component; triggers when enter or exit states."},{name:"unmountOnExit",type:"boolean",default:!1,desc:"If true, the element will unmount when `in={false}` and animation is done."}]})]})}function gt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(E,t)})):E(t)}function bt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function D(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||xt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Badge"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Badge } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Badge>default</Badge>
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  {['primary', 'success', 'warning', 'danger'].map((item, index) => (
    <Badge key={index} colorScheme={item}>
      {item}
    </Badge>
  ))}
</HStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'}]})]})}function ft(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(D,t)})):D(t)}function xt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function N(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||wt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Divider"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Divider } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Divider />
`})}),`
`,n(e.h2,{children:"Orientation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<>
  <Divider orientation="horizontal" />
  <Center height="50px" mt={12}>
    <Divider orientation="vertical" />
  </Center>
</>
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<>
  <Divider orientation="horizontal" variant="dashed" />
  <Center height="50px" mt={12}>
    <Divider orientation="vertical" variant="dashed" />
  </Center>
</>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"orientation",type:'"horizontal" | "vertical"',default:'"horizontal"'},{name:"variant",type:'"solid" | "dashed"',default:'"solid"'}]})]})}function yt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(N,t)})):N(t)}function wt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function L(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||vt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Empty"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Empty, EmptyIcon, EmptyTitle, EmptyDescription, EmptyFooter } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Empty border="1px solid readable.border">
  <EmptyIcon />
  <EmptyTitle>Title</EmptyTitle>
  <EmptyDescription>
    Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
  </EmptyDescription>
  <EmptyFooter>
    <Button size="lg">Button</Button>
  </EmptyFooter>
</Empty>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.h3,{children:"small"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Empty size="sm" w={343} border="1px solid readable.border">
  <EmptyIcon />
  <EmptyTitle>Title</EmptyTitle>
  <EmptyDescription>
    Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
  </EmptyDescription>
  <EmptyFooter>
    <Button size="md">Button</Button>
  </EmptyFooter>
</Empty>
`})}),`
`,n(e.h3,{children:"medium"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Empty size="md" w={720} border="1px solid readable.border">
  <EmptyIcon />
  <EmptyTitle>Title</EmptyTitle>
  <EmptyDescription>
    Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
  </EmptyDescription>
  <EmptyFooter>
    <Button size="lg">Button</Button>
  </EmptyFooter>
</Empty>
`})}),`
`,n(e.h3,{children:"large"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Empty size="lg" border="1px solid readable.border">
  <EmptyIcon />
  <EmptyTitle>Title</EmptyTitle>
  <EmptyDescription>
    Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
  </EmptyDescription>
  <EmptyFooter>
    <Button size="lg">Button</Button>
  </EmptyFooter>
</Empty>
`})}),`
`,n(e.h2,{children:"Customizing image"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Empty size="sm" w={343} border="1px solid readable.border">
  <Image
    w={120}
    src="https://img0.baidu.com/it/u=1407663410,958063364&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=500"
  />
  <EmptyTitle>You don't have any APIs subscribed or called.</EmptyTitle>
  <EmptyDescription>Explore the best API packages in our Web3 API Marketplace.</EmptyDescription>
  <EmptyFooter>
    <Button size="md" rightIcon={<GoIcon />}>
      Explore API Marketplace
    </Button>
  </EmptyFooter>
</Empty>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"size",type:"sm | md | lg",default:"lg"}]}),`
`,n(e.h2,{children:"Examples"}),`
`,n(e.h3,{children:"Unit.sm"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Box bg="bg.bottom" p={24}>
  <Empty w={343} bg="bg.middle" size="sm">
    <EmptyIcon />
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>
      Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
    </EmptyDescription>
    <EmptyFooter>
      <Button size="md">Button</Button>
    </EmptyFooter>
  </Empty>
</Box>
`})}),`
`,n(e.h3,{children:"Unit.md"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Box bg="bg.bottom" p={24}>
  <Empty w={720} bg="bg.middle" size="md">
    <EmptyIcon />
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>
      Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
    </EmptyDescription>
    <EmptyFooter>
      <Button size="lg">Button</Button>
    </EmptyFooter>
  </Empty>
</Box>
`})}),`
`,n(e.h3,{children:"Unit.lg"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Box bg="bg.bottom" p={24}>
  <Empty bg="bg.middle" size="lg">
    <EmptyIcon />
    <EmptyTitle>Title</EmptyTitle>
    <EmptyDescription>
      Sit nulla est ex deserunt exercitation anim occaecat Nostrud ullamco.
    </EmptyDescription>
    <EmptyFooter>
      <Button size="lg">Button</Button>
    </EmptyFooter>
  </Empty>
</Box>
`})}),`
`,n(e.h3,{children:"Case"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Stack spacing={24} direction="row" bg="bg.bottom" p={24}>
  <Box width={375} p={20} bg="bg.middle">
    <Empty size="sm">
      <EmptyIcon />
      <EmptyTitle fontSize={16}>You don't have any APIs subscribed or called.</EmptyTitle>
      <EmptyDescription>
        Explore the best API packages in our Web3 API Marketplace.
      </EmptyDescription>
      <EmptyFooter>
        <Button size="md" rightIcon={<GoIcon />}>
          Explore API Marketplace
        </Button>
      </EmptyFooter>
    </Empty>
  </Box>

  <Box width={375} p={20} bg="bg.middle" alignSelf="flex-start">
    <Empty size="sm">
      <EmptyIcon />
      <EmptyTitle my={8}>You don\u2019t have any API Keys</EmptyTitle>
      <EmptyDescription>
        Create your first API Key to start using our abundant Web3 APIs.
      </EmptyDescription>
      <EmptyFooter>
        <Button size="md" rightIcon={<GoIcon />}>
          Create Now
        </Button>
      </EmptyFooter>
    </Empty>
  </Box>
</Stack>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Box p={20}>
  <Empty size="md" w={996} boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)">
    <EmptyIcon boxSize={80} />
    <EmptyTitle>You don't have any APIs in use.</EmptyTitle>
    <EmptyDescription>Explore the best API packages in our Web3 API Marketplace.</EmptyDescription>
    <EmptyFooter>
      <Button size="lg" rightIcon={<GoIcon />}>
        Create Now
      </Button>
    </EmptyFooter>
  </Empty>
</Box>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Box p={20}>
  <Empty size="lg" w={960} py={64} boxShadow="0px 4px 24px rgba(0, 0, 0, 0.08)">
    <EmptyIcon />
    <EmptyTitle>You don't have any APIs in use.</EmptyTitle>
    <EmptyDescription>Explore the best API packages in our Web3 API Marketplace.</EmptyDescription>
    <EmptyFooter>
      <Button size="lg" rightIcon={<GoIcon />}>
        Create Now
      </Button>
    </EmptyFooter>
  </Empty>
</Box>
`})})]})}function Tt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(L,t)})):L(t)}function vt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function R(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||It("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Pagination"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Pagination } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [page, setPage] = useState(1);

  const onChangePage = (page) => {
    setPage(page);
  };

  return <Pagination current={page} total={500} onChange={onChangePage} />;
}
`})}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChangePage = (page) => {
    // todo
  };

  return <Pagination defaultCurrent={2} total={500} onChange={onChangePage} />;
}
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack align="flex-start" spacing={24}>
  <Pagination current={1} total={500} isDisabled />
  <Pagination current={20} total={500} />
</VStack>
`})}),`
`,n(e.h2,{children:"Large pages"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [page, setPage] = useState(10000000);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <VStack align="flex-start" spacing={24}>
      <Pagination current={1} total={10000000000000} isDisabled />
      <Pagination current={page} total={10000000000000} onChange={onChangePage} />
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Colors"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <VStack align="flex-start" spacing={24}>
      {['primary', 'success', 'warning', 'danger'].map((c) => (
        <Pagination colorScheme={c} total={500} key={c} />
      ))}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"current",type:"number",desc:"The current page of the Pagination (in controlled mode)."},{name:"defaultCurrent",type:"number",default:1,desc:"The initial page of the Pagination (in uncontrolled mode)."},{name:"pageSize",type:"number",default:10},{name:"total",type:"number",default:0,desc:"Total records."},{name:"isDisabled",type:"boolean",default:!1,desc:"Whether the pagination is disabled."},{name:"hideOnSinglePage",type:"boolean",default:!1,desc:"Hide pagination when page = 1"},{name:"colorScheme",type:'"success" | "danger" | "warning" | "primary"',default:'"primary"',desc:"The color of buttons."},{name:"onChange",type:"(page: number) => void",desc:"When page changes, the function will be called."}]})]})}function Ct(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(R,t)})):R(t)}function It(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function O(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||St("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Table"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Table } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"with container"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function DefaultTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [
    {
      block: 1,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '4s ago',
      type: 'claim',
    },
    {
      block: 2,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '40s ago',
      type: 'Transfer Out',
    },
    {
      block: 3,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '1minute ago',
      type: 'Send',
    },
  ];

  return <Table columns={columns} data={data}></Table>;
}
`})}),`
`,n(e.h3,{children:"without container"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function WithoutContainerTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [
    {
      block: 1,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '4s ago',
      type: 'claim',
    },
    {
      block: 2,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '40s ago',
      type: 'Transfer Out',
    },
    {
      block: 3,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '1minute ago',
      type: 'Send',
    },
  ];

  return <Table columns={columns} data={data} withContainer={false}></Table>;
}
`})}),`
`,n(e.h3,{children:"with hover style"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function HoverTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [
    {
      block: 1,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '4s ago',
      type: 'claim',
    },
    {
      block: 2,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '40s ago',
      type: 'Transfer Out',
    },
    {
      block: 3,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '1minute ago',
      type: 'Send',
    },
  ];

  return <Table columns={columns} data={data} hoverBg={true}></Table>;
}
`})}),`
`,n(e.h3,{children:"with pagination"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function PaginationTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [
    {
      block: 1,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '4s ago',
      type: 'claim',
    },
    {
      block: 2,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '40s ago',
      type: 'Transfer Out',
    },
    {
      block: 3,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '1minute ago',
      type: 'Send',
    },
  ];

  return <Table columns={columns} data={data} headerContent='Latest 100,000 transactions (Total of 3,594,310,124)' pagination={{ total: 500, pageSize: 10, onChange: (page) => console.log('page', page) }}></Table>;
}
`})}),`
`,n(e.h3,{children:"with sort function"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function SortingTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
      sortable:true
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [
    {
      block: 1,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '4s ago',
      type: 'claim',
    },
    {
      block: 2,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '40s ago',
      type: 'Transfer Out',
    },
    {
      block: 3,
      hash: '0x100825e7a62ad61950dc74be619ae3bd59e6a466541a7d17870ce5ec8278376d',
      age: '1minute ago',
      type: 'Send',
    },
  ];

  return <Table columns={columns} data={data} onSortChange={(order,column,index)=>{console.log(order,column,index)}}></Table>;
}
`})}),`
`,n(e.h3,{children:"no data"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function EmptyTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
      sortable:true
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [];

  return <Table columns={columns} data={data}></Table>;
}
`})}),`
`,n(e.h3,{children:"loading"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function LoadingTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
      sortable:true
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [];

  return <Table columns={columns} data={data} loading={true}></Table>;
}
`})}),`
`,n(e.h3,{children:"error"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function ErrorTable() {
  const columns = [
    {
      header: 'Block',
      cell: (data) => {
        return <Box>{data.block}</Box>;
      },
      sortable:true
    },
    {
      header: 'Hash',
      cell: (data) => {
        return <Box>{data.hash}</Box>;
      },
    },
    {
      header: 'Age',
      cell: (data) => {
        return <Box>{data.age}</Box>;
      },
    },
    {
      header: 'Type',
      cell: (data) => {
        return <Box>{data.type}</Box>;
      },
    },
  ];

  const data = [];

  return <Table columns={columns} data={data} error={true}></Table>;
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"ColumnDef"}),`
`,n(r,{data:[{name:"id",type:"any",required:!1,desc:"Unique id for each column"},{name:"header",type:"React.ReactNode"},{name:"cell",type:"(data: T) => React.ReactNode"},{name:"width",type:"Responsive<number | string>",default:150},{name:"sortable",type:"boolean",required:!1,desc:"Show sort function for the certain column"}]}),`
`,n(e.h3,{children:"Table"}),`
`,n(r,{data:[{name:"columns",type:"ColumnDef<T>"},{name:"data",type:"Array<T>"},{name:"rootProps",type:"HTMLProps<'div'>"},{name:"tdProps",type:"HTMLProps<'td'>"},{name:"trProps",type:"HTMLProps<'tr'>"},{name:"thProps",type:"HTMLProps<'th'>"},{name:"loading",type:"boolean"},{name:"error",type:"boolean"},{name:"pagination",type:"PaginationProp"},{name:"headerContent",type:"React.ReactNode",desc:"Text content for the paginated table"},{name:"botttomContent",type:"React.ReactNode",desc:"Text content for the paginated table at bottom, default will be the same as headerContent"},{name:"withContainer",default:!0,desc:"Whether the table has outer container"},{name:"hoverBg",type:"string | boolean",desc:"Whether the table has hover style"},{name:"onSortChange",type:"(order: SortingOrder, column: Column<any>, index: number) => void",desc:"Sort function for the table"}]})]})}function Bt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(O,t)})):O(t)}function St(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function z(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p",ul:"ul",li:"li"},t.components),{PropsTable:r}=e;return r||Mt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Tabs"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Tabs, TabList, Tab, TabPanels, TabPanel, TabBadge } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [activeKey, setActiveKey] = useState(2);

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} onChange={onChange}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.h3,{children:"line"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Tabs>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n(e.h3,{children:"rounded"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Tabs variant="rounded">
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n(e.h3,{children:"squared"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Tabs variant="squared">
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n(e.h3,{children:"attached"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Tabs variant="attached">
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack spacing={24} align="flex-start">
  {['line', 'rounded', 'squared', 'attached'].map((item) => (
    <Tabs variant={item} key={item}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab isDisabled>Tab 3</Tab>
      </TabList>
    </Tabs>
  ))}
</VStack>
`})}),`
`,n(e.h2,{children:"Lazily mounting tab panels"}),`
`,o(e.p,{children:["By default, the ",n(e.code,{children:"Tabs"})," component will lazily renders ",n(e.code,{children:"TabPanel"}),", meaning that ",n(e.code,{children:"TabPanel"}),` is not
rendered before it become visible, and once it rendered, it will be keep in the DOM and is hidden or
visible by styles(`,n(e.code,{children:"display: none"}),", ",n(e.code,{children:"display: block"}),")."]}),`
`,n("br",{}),`
`,o(e.p,{children:["You can change this behavior by using ",n(e.code,{children:"isLazy"})," and ",n(e.code,{children:"lazyBehavior"})," props:"]}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.code,{children:"isLazy = false"}),": all panels will be rendered to the DOM, and are hidden or visible by styles."]}),`
`,o(e.li,{children:[n(e.code,{children:"isLazy = true"})," and ",n(e.code,{children:"lazyBehavior = 'keepMounted'"}),": the default behavior."]}),`
`,o(e.li,{children:[n(e.code,{children:"isLazy = true"})," and ",n(e.code,{children:"lazyBehavior = 'unmount'"}),`: panel only render when it's visible, once it
become invisible, it will be removed from DOM.`]}),`
`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Tabs isLazy={true} lazyBehavior="unmount">
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
    <Tab>Tab 3</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>Panel 1</TabPanel>
    <TabPanel>Panel 2</TabPanel>
    <TabPanel>Panel 3</TabPanel>
  </TabPanels>
</Tabs>
`})}),`
`,n(e.h2,{children:"Cutomizing tab keys"}),`
`,o(e.p,{children:["By default, a ",n(e.code,{children:"tab key"})," is its ",n(e.code,{children:"index"})," in ",n(e.code,{children:"TabList"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const options = [
    {
      title: 'Tab 1',
      content: 'Panel 1',
      key: 'one',
    },
    {
      title: 'Tab 2',
      content: 'Panel 2',
      key: 'two',
    },
    {
      title: 'Tab 3',
      content: 'Panel 3',
      key: 'three',
    },
  ];

  const [activeKey, setActiveKey] = useState('two');

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <Tabs activeKey={activeKey} onChange={onChange}>
      <TabList>
        {options.map((item) => (
          <Tab key={item.key} tabKey={item.key}>
            {item.title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {options.map((item) => (
          <TabPanel key={item.key} panelKey={item.key}>
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"Tabs"}),`
`,n(r,{data:[{name:"variant",type:"'line' | 'rounded' | 'squared' | 'attached'",default:"line"},{name:"activeKey",type:"string | number",desc:"The key of active tab (in controlled mode)."},{name:"defaultActiveKey",type:"string | number",desc:"The key of active tab (in uncontrolled mode)."},{name:"onChange",type:"(key: string | number) => void"},{name:"isLazy",type:"boolean",default:!0},{name:"lazyBehavior",type:"'keepMounted' | 'unmount'",default:"keepMounted"}]}),`
`,n(e.h3,{children:"Tab"}),`
`,n(r,{data:[{name:"tabKey",type:"string | number"},{name:"isDisabled",type:"boolean",default:!1}]}),`
`,n(e.h3,{children:"TabPanel"}),`
`,n(r,{data:[{name:"panelKey",type:"string | number"}]}),`
`,n(e.h2,{children:"Examples"}),`
`,n(e.h3,{children:"Style1"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<HStack spacing={24} align="flex-start">
  <VStack spacing={64}>
    <Tabs activeKey={1}>
      <TabList borderBottom="none" flexDirection="column">
        <Tab>Tab</Tab>
        <Tab>Tab</Tab>
        <Tab isDisabled>Tab</Tab>
      </TabList>
    </Tabs>
  </VStack>

  <VStack spacing={64}>
    <Tabs activeKey={1}>
      <TabList borderBottom="none" flexDirection="column">
        <Tab>
          <ValidatorsIcon size="md" mr={8} /> Tab
        </Tab>
        <Tab>
          <ValidatorsIcon size="md" mr={8} /> Tab
        </Tab>
        <Tab isDisabled>
          <ValidatorsIcon size="md" mr={8} /> Tab
        </Tab>
      </TabList>
    </Tabs>
  </VStack>

  <VStack spacing={64}>
    <Tabs activeKey={1}>
      <TabList borderBottom="none" flexDirection="column">
        <Tab>
          Tab<TabBadge>99</TabBadge>
        </Tab>
        <Tab>
          Tab<TabBadge>99</TabBadge>
        </Tab>
        <Tab isDisabled>
          Tab<TabBadge>99</TabBadge>
        </Tab>
      </TabList>
    </Tabs>
  </VStack>

  <VStack spacing={64}>
    <Tabs activeKey={1}>
      <TabList borderBottom="none" flexDirection="column">
        <Tab>
          <ValidatorsIcon size="md" mr={8} />
          Tab<TabBadge>99</TabBadge>
        </Tab>
        <Tab>
          <ValidatorsIcon size="md" mr={8} />
          Tab<TabBadge>99</TabBadge>
        </Tab>
        <Tab isDisabled>
          <ValidatorsIcon size="md" mr={8} />
          Tab<TabBadge>99</TabBadge>
        </Tab>
      </TabList>
    </Tabs>
  </VStack>
</HStack>
`})}),`
`,n(e.h3,{children:"Style2"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<VStack spacing={24} align="flex-start">
  <Tabs activeKey={1} variant="rounded">
    <TabList>
      <Tab>Tab</Tab>
      <Tab>Tab</Tab>
      <Tab isDisabled>Tab</Tab>
    </TabList>
  </Tabs>

  <Tabs activeKey={1} variant="rounded">
    <TabList>
      <Tab>
        <ValidatorsIcon size="md" mr={4} />
        Tab
      </Tab>
      <Tab>
        <ValidatorsIcon size="md" mr={4} />
        Tab
      </Tab>
      <Tab isDisabled>
        <ValidatorsIcon size="md" mr={4} />
        Tab
      </Tab>
    </TabList>
  </Tabs>
</VStack>
`})}),`
`,n(e.h3,{children:"Style3"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<VStack spacing={24} align="flex-start">
  <Tabs activeKey={1} variant="squared">
    <TabList>
      <Tab>
        <ValidatorsIcon size="md" mb={4} />
        Tab
      </Tab>
      <Tab>
        <ValidatorsIcon size="md" mb={4} />
        Tab
      </Tab>
      <Tab isDisabled>
        <ValidatorsIcon size="md" mb={4} />
        Tab
      </Tab>
    </TabList>
  </Tabs>
</VStack>
`})}),`
`,n(e.h3,{children:"Style4"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<VStack spacing={24} align="flex-start">
  <HStack spacing={24}>
    <Tabs variant="attached">
      <TabList>
        <Tab borderRadius={'0 !important'}>Tab</Tab>
      </TabList>
    </Tabs>

    <Tabs variant="attached">
      <TabList>
        <Tab borderRadius={'0 !important'} isDisabled>
          Tab
        </Tab>
      </TabList>
    </Tabs>
  </HStack>

  <HStack spacing={24}>
    <Tabs variant="attached" activeKey={-1}>
      <TabList>
        <Tab borderRadius={'0 !important'}>Tab</Tab>
      </TabList>
    </Tabs>

    <Tabs variant="attached" activeKey={-1}>
      <TabList>
        <Tab borderRadius={'0 !important'} isDisabled>
          Tab
        </Tab>
      </TabList>
    </Tabs>
  </HStack>
</VStack>
`})}),`
`,n(e.h3,{children:"Template"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<VStack spacing={24} align="flex-start">
  <HStack>
    <Box w={100}>Style1</Box>
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab isDisabled>Tab 4</Tab>
      </TabList>
    </Tabs>
  </HStack>

  <HStack>
    <Box w={100}>Style2</Box>
    <Tabs variant="rounded">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab isDisabled>Tab 4</Tab>
      </TabList>
    </Tabs>
  </HStack>

  <HStack>
    <Box w={100}>Style3</Box>
    <Tabs variant="squared">
      <TabList>
        <Tab>
          <ValidatorsIcon size="md" mb={4} />
          Tab 1
        </Tab>
        <Tab>
          <ValidatorsIcon size="md" mb={4} />
          Tab 2
        </Tab>
        <Tab>
          <ValidatorsIcon size="md" mb={4} />
          Tab 3
        </Tab>
        <Tab isDisabled>
          <ValidatorsIcon size="md" mb={4} />
          Tab 4
        </Tab>
      </TabList>
    </Tabs>
  </HStack>

  <HStack>
    <Box w={100}>Style4</Box>
    <Tabs variant="attached">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab isDisabled>Tab 4</Tab>
      </TabList>
    </Tabs>
  </HStack>
</VStack>
`})})]})}function kt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(z,t)})):z(t)}function Mt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function F(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Pt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"toast"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { toast } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onShowToast = () => {
    toast.info({
      description: 'description',
    });

    // or
    // toast({
    //   variant: 'info',
    //   description: 'description',
    // });
  };

  return (
    <HStack>
      <Button size="md" onClick={onShowToast}>
        default toast
      </Button>
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onShowToast = (variant) => {
    toast({
      variant,
      description: 'description',
    });

    // or
    // toast.info({
    //   description: 'description',
    // });
  };

  return (
    <HStack>
      {['info', 'success', 'warning', 'error'].map((item) => (
        <Button size="md" key={item} onClick={() => onShowToast(item)}>
          {item}
        </Button>
      ))}
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"variant",type:"'info' | 'warning' | 'success' | 'error'"},{name:"description",type:" React.ReactNode"},{name:"duration",type:"number",default:2e3}]})]})}function jt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(F,t)})):F(t)}function Pt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function _(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3"},t.components),{PropsTable:r}=e;return r||Dt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Skeleton"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Skeleton, SkeletonCircle, SkeletonSquare, SkeletonText } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.p,{children:"You can use it as a standalone component."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Stack p={12} bg="bg.bottom">
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
}
`})}),`
`,n(e.p,{children:"Or to wrap another component to take the same height and width."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Skeleton>
      <div>contents wrapped</div>
      <div>won't be visible</div>
    </Skeleton>
  );
}
`})}),`
`,n(e.p,{children:"Useful when fetching remote data."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box h={50} bg="scene.warning.normal">
        content
      </Box>
    </Skeleton>
  );
}
`})}),`
`,n(e.h2,{children:"Circle, Square and Text Skeleton"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Stack p={12} spacing={12} bg="bg.bottom">
      <SkeletonCircle />
      <SkeletonSquare />
      <SkeletonText noOfLines={4} spacing={12} skeletonHeight={20} />
    </Stack>
  );
}
`})}),`
`,n(e.h2,{children:"Skeleton color"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Box p={12} bg="bg.bottom">
      <Skeleton startColor="scene.primary.normal" endColor="scene.success.normal" />
    </Box>
  );
}
`})}),`
`,n(e.h2,{children:"Skipping the skeleton when content is loaded"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Skeleton isLoaded>
  <div>Content is loaded!</div>
</Skeleton>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"Skeleton"}),`
`,n(r,{data:[{name:"startColor",type:"string",desc:"The color at the animation start"},{name:"endColor",type:"string",desc:"The color at the animation end"},{name:"isLoaded",type:"boolean",default:!1,desc:"If true, it'll render its children with a nice fade transition"},{name:"speed",type:"number",default:2,desc:"The animation speed in seconds"},{name:"fadeDuration",type:"number",default:.2,desc:"The fadeIn duration in seconds"},{name:"fitContent",type:"boolean",default:!1,desc:"If true, the skeleton will take the width of it's children"}]}),`
`,n(e.h3,{children:"SkeletonCircle"}),`
`,n(r,{data:[{name:"size",type:"ResponsiveValue<number | string>"}]}),`
`,n(e.h3,{children:"SkeletonSquare"}),`
`,n(r,{data:[{name:"size",type:"ResponsiveValue<number | string>"}]}),`
`,n(e.h3,{children:"SkeletonText"}),`
`,n(r,{data:[{name:"noOfLines",type:"ResponsiveValue<number>",default:3},{name:"spacing",type:"ResponsiveValue<number | string>"},{name:"skeletonHeight",type:"ResponsiveValue<number | string>"},{name:"skeletonBorderRadius",type:"ResponsiveValue<number | string>"}]})]})}function Et(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(_,t)})):_(t)}function Dt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function A(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3"},t.components),{PropsTable:r}=e;return r||Lt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Button"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Button } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Button>Button</Button>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  {/* height = 24px */}
  <Button size="sm">Small Button</Button>

  {/* height = 40px */}
  <Button size="md">Medium Button</Button>

  {/* height = 50px */}
  <Button size="lg">Large Button</Button>
</Wrap>
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <Button variant="scene">Default Scene Button</Button>
  <Button variant="scene" colorScheme="warning">
    Warning Scene Button
  </Button>
  <Button variant="brand" bg="#00ACEE" color="#FFF">
    Brand Button
  </Button>
  <Button variant="second">Second Button</Button>
  <Button variant="ghost">Ghost Button</Button>
  <Button variant="text">Text Button</Button>
  <Button variant="link">Link Button</Button>
</Wrap>
`})}),`
`,n(e.h2,{children:"Scene Colors"}),`
`,o(e.p,{children:["Only takes effect when ",n(e.code,{children:'variant="scene"'}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <Button colorScheme="primary">primary</Button>
  <Button colorScheme="success">success</Button>
  <Button colorScheme="warning">warning</Button>
  <Button colorScheme="danger">danger</Button>
</Wrap>
`})}),`
`,n(e.h2,{children:"With Icons"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  <HStack>
    <Button size="sm" leftIcon={<ValidatorsIcon />}>
      Small Button
    </Button>
    <Button size="md" leftIcon={<ValidatorsIcon />}>
      Medium Button
    </Button>
    <Button size="lg" leftIcon={<ValidatorsIcon />}>
      Large Button
    </Button>
  </HStack>

  <HStack>
    <Button size="sm" rightIcon={<GoIcon />}>
      Small Button
    </Button>
    <Button size="md" rightIcon={<GoIcon />}>
      Medium Button
    </Button>
    <Button size="lg" rightIcon={<GoIcon />}>
      Large Button
    </Button>
  </HStack>
</VStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <Button variant="scene" isDisabled>
    Small Button
  </Button>
  <Button variant="scene" colorScheme="warning" isDisabled>
    Scene Button
  </Button>
  <Button variant="brand" bg="#00ACEE" color="#FFF" isDisabled>
    Brand Button
  </Button>
  <Button variant="second" isDisabled>
    Second Button
  </Button>
  <Button variant="ghost" isDisabled>
    Ghost Button
  </Button>
  <Button variant="text" isDisabled>
    Text Button
  </Button>
  <Button variant="link" isDisabled>
    Link Button
  </Button>
</Wrap>
`})}),`
`,n(e.h3,{children:"isLoading"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <Button variant="scene" isLoading>
    Small Button
  </Button>
  <Button variant="scene" colorScheme="warning" isLoading>
    Scene Button
  </Button>
  <Button variant="brand" bg="#00ACEE" color="#FFF" isLoading>
    Brand Button
  </Button>
  <Button variant="second" isLoading>
    Second Button
  </Button>
  <Button variant="ghost" isLoading>
    Ghost Button
  </Button>
</Wrap>
`})}),`
`,n(e.h2,{children:"as prop"}),`
`,o(e.p,{children:["You can use the ",n(e.code,{children:"as"})," prop to change the element render, just like styled-components."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Button as="a" variant="link" href="https://www.baidu.com" target="_blank">
  Link
</Button>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"',desc:'When `variant="scene"`, you can change the skin of the button.'},{name:"size",type:"sm | md | lg",default:"lg"},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the button will be disabled."},{name:"isLoading",type:"boolean",default:!1},{name:"iconSpacing",type:"Responsive<number | string>"},{name:"leftIcon",type:"React.ReactElement",desc:"If added, the button will show an icon before the button's label."},{name:"rightIcon",type:"React.ReactElement",desc:"If added, the button will show an icon after the button's label."},{name:"loadingText",type:"string",default:"Loading...",desc:"The label to show in the button when isLoading is true."},{name:"variant",type:"scene | brand | second | ghost | text | link",default:"scene"},{name:"type",type:"submit | reset | button"}]})]})}function Nt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(A,t)})):A(t)}function Lt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function $(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",p:"p",h3:"h3"},t.components),{PropsTable:r}=e;return r||Ot("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Icon Button"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { IconButton } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<IconButton icon={<ValidatorsIcon />} />
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <IconButton icon={<ValidatorsIcon />} size="sm" />
  <IconButton icon={<ValidatorsIcon />} size="md" />
  <IconButton icon={<ValidatorsIcon />} size="lg" />
</Wrap>
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <IconButton icon={<ValidatorsIcon />} variant="scene" />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="warning" />
  <IconButton icon={<ValidatorsIcon />} variant="brand" bg="#00ACEE" color="#FFF" />
  <IconButton icon={<ValidatorsIcon />} variant="second" />
  <IconButton icon={<ValidatorsIcon />} variant="ghost" />
  <IconButton icon={<ValidatorsIcon />} variant="text" />
  <IconButton icon={<ValidatorsIcon />} variant="link" />
</Wrap>
`})}),`
`,n(e.h2,{children:"Scene Colors"}),`
`,o(e.p,{children:["Only takes effect when ",n(e.code,{children:'variant="scene"'}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="success" />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="danger" />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="warning" />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="primary" />
</Wrap>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="success" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="danger" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="warning" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="scene" colorScheme="primary" isDisabled />

  <IconButton icon={<ValidatorsIcon />} variant="brand" isDisabled bg="#00ACEE" color="#FFF" />
  <IconButton icon={<ValidatorsIcon />} variant="second" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="ghost" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="text" isDisabled />
  <IconButton icon={<ValidatorsIcon />} variant="link" isDisabled />
</Wrap>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"',desc:'Scene colors, only effect when `variant="scene"`.'},{name:"size",type:"sm | md | lg",default:"lg"},{name:"isDisabled",type:"boolean",desc:"If true, the button will be disabled."},{name:"icon",type:"React.ReactElement"},{name:"variant",type:"scene | brand | second | ghost | text | link",default:"scene"},{name:"type",type:"submit | reset | button"}]})]})}function Rt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n($,t)})):$(t)}function Ot(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function V(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Ft("PropsTable",!0),o(i,{children:[n(e.h1,{children:"ButtonGroup"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ButtonGroup } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<ButtonGroup size="md" variant="scene" colorScheme="warning">
  <Button colorScheme="warning">Button</Button>
  <IconButton icon={<SunIcon />}></IconButton>
</ButtonGroup>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  <ButtonGroup size="sm" variant="scene" colorScheme="warning">
    <Button colorScheme="warning">Button</Button>
    <IconButton icon={<SunIcon />}></IconButton>
  </ButtonGroup>

  <ButtonGroup size="md" variant="scene" colorScheme="warning">
    <Button colorScheme="warning">Button</Button>
    <IconButton icon={<SunIcon />}></IconButton>
  </ButtonGroup>

  <ButtonGroup size="lg" variant="scene" colorScheme="warning">
    <Button colorScheme="warning">Button</Button>
    <IconButton icon={<SunIcon />}></IconButton>
  </ButtonGroup>
</VStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isAttached"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<ButtonGroup size="md" variant="scene" colorScheme="warning" isAttached>
  <Button colorScheme="primary">Button</Button>
  <IconButton icon={<SunIcon />}></IconButton>
</ButtonGroup>
`})}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<ButtonGroup size="md" variant="scene" colorScheme="warning" isDisabled>
  <Button colorScheme="success">Button</Button>
  <IconButton icon={<SunIcon />}></IconButton>
</ButtonGroup>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:"success | danger | warning | primary",default:"primary",desc:'When `variant="scene"`, you can change the skin of the button.'},{name:"size",type:"sm | md | lg",default:"lg"},{name:"variant",type:"scene | brand | second | ghost | text | link",default:"scene"},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the button will be disabled."},{name:"isAttached",type:"boolean",default:!1,desc:"If true, the borderRadius of button that are direct children will be altered to look flushed together."},{name:"spacing",type:"Responsive<number | string>",default:4,desc:"The spacing between the buttons."}]})]})}function zt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(V,t)})):V(t)}function Ft(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function H(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||At("PropsTable",!0),o(i,{children:[n(e.h1,{children:"CloseButton"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { CloseButton } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<CloseButton />
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<CloseButton isDisabled />
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the button will be disabled."}]})]})}function _t(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(H,t)})):H(t)}function At(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function X(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Vt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Checkbox"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Checkbox } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChange = (event) => {
    // todo
  };

  return (
    <Checkbox defaultChecked={true} onChange={onChange}>
      Label
    </Checkbox>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Checkbox isChecked={isChecked} onChange={onChange}>
      Label
    </Checkbox>
  );
}
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  {['primary', 'success', 'warning', 'danger'].map((item) => (
    <Checkbox key={item} colorScheme={item} defaultChecked={true}>
      Label
    </Checkbox>
  ))}
</VStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  <Checkbox defaultChecked isDisabled>
    Label
  </Checkbox>
  <Checkbox isDisabled>Label</Checkbox>
</VStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isChecked",type:"boolean",default:!1,desc:"The checkbox checked status (in controlled mode)."},{name:"defaultChecked",type:"boolean",default:!1,desc:"The checkbox checked status (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the checkbox will be disabled."},{name:"spacing",type:"Responsive<number | string>",default:11,desc:"The spacing between Checkbox and Label"},{name:"name",type:"string",desc:"The checkbox input element's name."},{name:"value",type:"string",desc:"The checkbox input element's value."},{name:"onChange",type:"(event) => void"}]})]})}function $t(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(X,t)})):X(t)}function Vt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function G(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Xt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Radio"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Radio } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return <Radio>Label</Radio>;
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isChecked, setIsChecked] = useState(false);

  return <Radio isChecked={isChecked}>Label</Radio>;
}
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  {['primary', 'success', 'warning', 'danger'].map((item) => (
    <Radio key={item} colorScheme={item} defaultChecked={false}>
      Label
    </Radio>
  ))}
</VStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  <Radio defaultChecked isDisabled>
    Label
  </Radio>
  <Radio isDisabled>Label</Radio>
</VStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isChecked",type:"boolean",default:!1,desc:"The radio checked status (in controlled mode)."},{name:"defaultChecked",type:"boolean",default:!1,desc:"The radio checked status (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the radio will be disabled."},{name:"spacing",type:"Responsive<number | string>",default:7,desc:"The spacing between Radio and Label"},{name:"name",type:"string",desc:"The radio input element's name."},{name:"value",type:"string",desc:"The radio input element's value."}]})]})}function Ht(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(G,t)})):G(t)}function Xt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function W(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Wt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"RadioGroup"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { RadioGroup } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChange = (value) => {
    // todo
  };

  return (
    <RadioGroup defaultValue="apple" onChange={onChange}>
      <VStack alignItems="flex-start">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="pear">Pear</Radio>
      </VStack>
    </RadioGroup>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [value, setValue] = useState('apple');

  const onChange = (value) => {
    setValue(value);
  };

  return (
    <RadioGroup value={value} onChange={onChange}>
      <VStack alignItems="flex-start">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="pear">Pear</Radio>
      </VStack>
    </RadioGroup>
  );
}
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack spacing={48}>
  {['primary', 'success', 'warning', 'danger'].map((item) => (
    <RadioGroup key={item} defaultValue="apple" colorScheme={item}>
      <VStack alignItems="flex-start">
        <Radio value="apple">Apple</Radio>
        <Radio value="banana">Banana</Radio>
        <Radio value="pear">Pear</Radio>
      </VStack>
    </RadioGroup>
  ))}
</HStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<RadioGroup defaultValue="apple" isDisabled>
  <VStack alignItems="flex-start">
    <Radio value="apple">Apple</Radio>
    <Radio value="banana">Banana</Radio>
    <Radio value="pear">Pear</Radio>
  </VStack>
</RadioGroup>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"value",type:"boolean",desc:"The radio group selected value (in controlled mode)."},{name:"defaultValue",type:"boolean",desc:"The radio group selected value (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the radio group will be disabled."},{name:"name",type:"string",desc:"The radio input element's name."}]})]})}function Gt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(W,t)})):W(t)}function Wt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Q(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||qt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Switch"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Switch } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChange = (event) => {
    // todo
  };

  return (
    <Switch defaultChecked={true} onChange={onChange}>
      Label
    </Switch>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isChecked, setIsChecked] = useState(true);

  const onChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Switch isChecked={isChecked} onChange={onChange}>
      Label
    </Switch>
  );
}
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  {['primary', 'success', 'warning', 'danger'].map((item) => (
    <Switch key={item} colorScheme={item} defaultChecked={true}>
      Label
    </Switch>
  ))}
</VStack>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack alignItems="flex-start">
  <Switch defaultChecked isDisabled>
    Label
  </Switch>
  <Switch isDisabled>Label</Switch>
</VStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isChecked",type:"boolean",default:!1,desc:"The switch checked status (in controlled mode)."},{name:"defaultChecked",type:"boolean",default:!1,desc:"The switch checked status (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the switch will be disabled."},{name:"spacing",type:"Responsive<number | string>",default:11,desc:"The spacing between Switch and Label"},{name:"name",type:"string",desc:"The switch input element's name."},{name:"value",type:"string",desc:"The switch input element's value."},{name:"onChange",type:"(event) => void"}]})]})}function Qt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Q,t)})):Q(t)}function qt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function q(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Kt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Input"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Input } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return <Input value={value} onChange={onChange} placeholder="Please enter..." />;
}
`})}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChange = (event) => {
    // todo
  };

  return <Input defaultValue={'some text'} onChange={onChange} placeholder="Please enter..." />;
}
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack>
  {/* height = 24px */}
  <Input size="sm" placeholder="small size" />

  {/* height = 40px */}
  <Input size="md" placeholder="medium size" />

  {/* height = 50px */}
  <Input size="lg" placeholder="Large size" />
</VStack>
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <VStack>
      {['primary', 'success', 'warning', 'danger'].map((item) => (
        <Input key={item} colorScheme={item} placeholder={item} />
      ))}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Input defaultValue="some text" isDisabled />
`})}),`
`,n(e.h3,{children:"isInvalid"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Input defaultValue="some text" isInvalid />
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"value",type:"string",desc:"The input value (in controlled mode)."},{name:"defaultValue",type:"string",desc:"The input value (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"',desc:"The outline color of input"},{name:"size",type:"sm | md | lg",default:"lg"},{name:"onChange",type:"(event) => void"},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the input will be disabled."},{name:"name",type:"string",desc:"The input element's name."},{name:"maxLength",type:"number"}]})]})}function Ut(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(q,t)})):q(t)}function Kt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function U(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Jt("PropsTable",!0),o(i,{children:[n(e.h1,{children:"InputGroup"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { InputGroup, InputLeftElement, InputRightElement } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup>
  <InputLeftElement>
    <ValidatorsIcon size="sm" />
  </InputLeftElement>
  <Input />
  <InputRightElement>
    <QrcodeIcon />
  </InputRightElement>
</InputGroup>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack>
  <InputGroup size="sm">
    <InputLeftElement>
      <ValidatorsIcon size="sm" />
    </InputLeftElement>
    <Input />
    <InputRightElement>
      <QrcodeIcon size="sm" />
    </InputRightElement>
  </InputGroup>

  <InputGroup size="md">
    <InputLeftElement>
      <ValidatorsIcon />
    </InputLeftElement>
    <Input />
    <InputRightElement>
      <QrcodeIcon />
    </InputRightElement>
  </InputGroup>

  <InputGroup size="lg">
    <InputLeftElement>
      <ValidatorsIcon />
    </InputLeftElement>
    <Input />
    <InputRightElement>
      <QrcodeIcon />
    </InputRightElement>
  </InputGroup>
</VStack>
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <VStack>
      {['primary', 'success', 'warning', 'danger'].map((item) => (
        <InputGroup key={item} colorScheme={item}>
          <InputLeftElement>
            <ValidatorsIcon />
          </InputLeftElement>
          <Input />
          <InputRightElement>
            <QrcodeIcon />
          </InputRightElement>
        </InputGroup>
      ))}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup isDisabled>
  <InputLeftElement>
    <ValidatorsIcon />
  </InputLeftElement>
  <Input />
  <InputRightElement>
    <QrcodeIcon _hover={{ color: 'scene.primary.active' }} />
  </InputRightElement>
</InputGroup>
`})}),`
`,n(e.h3,{children:"isInvalid"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup isInvalid>
  <InputLeftElement>
    <ValidatorsIcon />
  </InputLeftElement>
  <Input />
  <InputRightElement>
    <QrcodeIcon _hover={{ color: 'scene.primary.active' }} />
  </InputRightElement>
</InputGroup>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"',desc:"The outline color of input"},{name:"size",type:"sm | md | lg",default:"lg"},{name:"isDisabled",type:"boolean",default:!1},{name:"isInvalid",type:"boolean",default:!1}]})]})}function Yt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(U,t)})):U(t)}function Jt(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function K(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"InputLeftElement"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { InputLeftElement } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup>
  <InputLeftElement>
    <ValidatorsIcon />
  </InputLeftElement>
  <Input />
</InputGroup>
`})}),`
`,n(e.h2,{children:"Customizing styles"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup>
  <InputLeftElement w={100} bg="scene.warning.normal" top={1} left={1} h={48} borderLeftRadius={8}>
    <ValidatorsIcon />
  </InputLeftElement>
  <Input pl={100} />
</InputGroup>
`})})]})}function Zt(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(K,t)})):K(t)}function Y(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"InputRightElement"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { InputRightElement } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup>
  <Input />
  <InputRightElement>
    <SeeIcon />
  </InputRightElement>
</InputGroup>
`})}),`
`,n(e.h2,{children:"Customizing styles"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<InputGroup>
  <Input pr={100} />
  <InputRightElement
    w={100}
    bg="scene.warning.normal"
    top={1}
    right={1}
    h={48}
    borderRightRadius={8}
  >
    <SeeIcon />
  </InputRightElement>
</InputGroup>
`})})]})}function eo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Y,t)})):Y(t)}function J(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||to("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Textarea"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Textarea } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return <Textarea value={value} onChange={onChange} placeholder="Please enter..." />;
}
`})}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const onChange = (event) => {
    // todo
  };

  return <Textarea defaultValue={'some text'} onChange={onChange} placeholder="Please enter..." />;
}
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <VStack>
      {['primary', 'success', 'warning', 'danger'].map((item) => (
        <Textarea key={item} colorScheme={item} placeholder={item} />
      ))}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Textarea defaultValue="some text" isDisabled />
`})}),`
`,n(e.h3,{children:"isInvalid"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Textarea defaultValue="some text" isInvalid />
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"value",type:"string",desc:"The textarea value (in controlled mode)."},{name:"defaultValue",type:"string",desc:"The textarea value (in uncontrolled mode)."},{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"',desc:"The outline color of textarea"},{name:"onChange",type:"(event) => void"},{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the textarea will be disabled."},{name:"name",type:"string",desc:"The textarea element's name."},{name:"maxLength",type:"number"}]})]})}function no(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(J,t)})):J(t)}function to(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Z(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||ro("PropsTable",!0),o(i,{children:[n(e.h1,{children:"FormControl"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" placeholder="Please enter your email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isRequired"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isRequired>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>
    Email is required. <SunIcon></SunIcon>
  </FormErrorMessage>
</FormControl>
`})}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isDisabled>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>
    Email is required. <SunIcon></SunIcon>
  </FormErrorMessage>
</FormControl>
`})}),`
`,n(e.h3,{children:"isInvalid"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isInvalid>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>Email is required.</FormErrorMessage>
</FormControl>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isDisabled",required:!1,type:"boolean",default:!1,desc:"If true, the form control will be disabled."},{name:"isInvalid",required:!1,type:"boolean",default:!1,desc:"If true, the form control will be invalid."},{name:"isRequired",required:!1,type:"boolean",default:!1,desc:"If true, the form control will be required."}]})]})}function oo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Z,t)})):Z(t)}function ro(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ee(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"FormErrorMessage"}),`
`,o(e.p,{children:["Used inside ",n(e.code,{children:"FormControl"})," and visible only if ",n(e.code,{children:"FormControl"})," is ",n(e.code,{children:"isInvalid"}),"."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { FormErrorMessage } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isInvalid>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>Email is required.</FormErrorMessage>
</FormControl>
`})})]})}function io(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ee,t)})):ee(t)}function ne(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||ao("PropsTable",!0),o(i,{children:[n(e.h1,{children:"FormLabel"}),`
`,o(e.p,{children:["Used inside ",n(e.code,{children:"FormControl"}),"."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { FormLabel } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isRequired>
  <FormLabel htmlFor="email">Email address</FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
`})}),`
`,n(e.h2,{children:"Customizing required indicator"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isRequired>
  <FormLabel htmlFor="email" requiredIndicator={<ColoredInfoIcon size="sm" />}>
    Email address
  </FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"requiredIndicator",type:"React.ReactElement",default:"<FormRequiredIndicator />"}]})]})}function co(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ne,t)})):ne(t)}function ao(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function te(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"FormRequiredIndicator"}),`
`,o(e.p,{children:["The default required indicator for ",n(e.code,{children:"FormLabel"}),"."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { FormRequiredIndicator } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<FormControl isRequired>
  <FormLabel htmlFor="email" requiredIndicator={<FormRequiredIndicator />}>
    Email address
  </FormLabel>
  <Input name="email" size="md" />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
`})})]})}function lo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(te,t)})):te(t)}function oe(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||ho("PropsTable",!0),o(i,{children:[n(e.h1,{children:"AspectRatio"}),`
`,o(e.p,{children:[n(e.code,{children:"AspectRatio"})," can automatically calculate the height according to the ",n(e.code,{children:"ratio"}),` when the width is
changed, `,n(e.code,{children:"AspectRatio"})," is used to embed responsive images, videos and maps, etc."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { AspectRatio } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<AspectRatio maxW={600} ratio={690 / 388}>
  <Image src="https://img0.baidu.com/it/u=1681240929,3690860539&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388" />
</AspectRatio>
`})}),`
`,n(e.h2,{children:"Responsive ratio"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<AspectRatio maxW={400} ratio={[3 / 1, null, 690 / 388]}>
  <Image
    src="https://img0.baidu.com/it/u=1681240929,3690860539&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=388"
    objectFit="cover"
  />
</AspectRatio>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"ratio",type:"Responsive<number | string>",default:1}]})]})}function so(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(oe,t)})):oe(t)}function ho(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function re(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",p:"p"},t.components);return o(i,{children:[n(e.h1,{children:"Box"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Box } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box bg="scene.warning.normal" w="100%" p={16} color="white">
  This is a Box
</Box>
`})}),`
`,n(e.h2,{children:"as prop"}),`
`,o(e.p,{children:["You can use the ",n(e.code,{children:"as"})," prop to change the element render, just like styled-components."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box as="button" borderRadius={8} bg="scene.warning.normal" color="white" px={16} h={32}>
  Button
</Box>
`})})]})}function uo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(re,t)})):re(t)}function ie(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"Center"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Center } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Center bg="scene.warning.normal" h={100} color="white">
  Center
</Center>
`})}),`
`,n(e.h2,{children:"With icons"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Center boxSize={40} bg="scene.warning.normal" color="white">
    <SunIcon />
  </Center>

  <Center boxSize={40} bg="scene.warning.normal" color="white">
    <MoonIcon />
  </Center>
</HStack>
`})})]})}function mo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ie,t)})):ie(t)}function ce(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||go("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Circle"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Circle } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Circle bg="scene.warning.normal" size={60} color="white"></Circle>
`})}),`
`,n(e.h2,{children:"Size"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Circle bg="scene.warning.normal" size={40} color="white"></Circle>
  <Circle bg="scene.warning.normal" size={60} color="white"></Circle>
</HStack>
`})}),`
`,n(e.h2,{children:"With icons"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Circle size={40} bg="scene.warning.normal" color="white">
    <SunIcon />
  </Circle>

  <Circle size={40} bg="scene.warning.normal" color="white">
    <MoonIcon />
  </Circle>
</HStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"size",type:"Responsive<number | string>"}]})]})}function po(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ce,t)})):ce(t)}function go(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ae(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||fo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Square"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Square } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Square bg="scene.warning.normal" size={60} color="white"></Square>
`})}),`
`,n(e.h2,{children:"Size"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Square bg="scene.warning.normal" size={40} color="white"></Square>
  <Square bg="scene.warning.normal" size={60} color="white"></Square>
</HStack>
`})}),`
`,n(e.h2,{children:"With icons"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Square size={40} bg="scene.warning.normal" color="white">
    <SunIcon />
  </Square>

  <Square size={40} bg="scene.warning.normal" color="white">
    <MoonIcon />
  </Square>
</HStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"size",type:"Responsive<number | string>"}]})]})}function bo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ae,t)})):ae(t)}function fo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function le(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||yo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Flex"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Flex } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Flex>
  <Center w={100} bg="scene.success.normal">
    <Text>Box 1</Text>
  </Center>
  <Square size={150} bg="scene.danger.normal">
    <Text>Box 2</Text>
  </Square>
  <Box flex={1} bg="scene.warning.normal">
    <Text>Box 3</Text>
  </Box>
</Flex>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"align",desc:"Shorthand for alignItems style prop"},{name:"basis",desc:"Shorthand for flexBasis style prop"},{name:"direction",desc:"Shorthand for flexDirection style prop"},{name:"grow",desc:"Shorthand for flexGrow style prop"},{name:"justify",desc:"Shorthand for justifyContent style prop"},{name:"shrink",desc:"Shorthand for flexShrink style prop"},{name:"wrap",desc:"Shorthand for flexWrap style prop"}]})]})}function xo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(le,t)})):le(t)}function yo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function de(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||To("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Grid"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Grid, GridItem } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"Template columns"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Grid templateColumns="repeat(5, 1fr)" gap={16}>
  <GridItem w="100%" h={40} bg="scene.warning.normal" />
  <GridItem w="100%" h={40} bg="scene.warning.normal" />
  <GridItem w="100%" h={40} bg="scene.warning.normal" />
  <GridItem w="100%" h={40} bg="scene.warning.normal" />
  <GridItem w="100%" h={40} bg="scene.warning.normal" />
</Grid>
`})}),`
`,n(e.h3,{children:"Spanning columns"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Grid h={200} templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={16}>
  <GridItem rowSpan={2} colSpan={1} bg="scene.warning.normal" />
  <GridItem colSpan={2} bg="scene.success.normal" />
  <GridItem colSpan={2} bg="scene.success.normal" />
  <GridItem colSpan={4} bg="scene.warning.normal" />
</Grid>
`})}),`
`,n(e.h3,{children:"Starting and ending lines"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Grid templateColumns="repeat(5, 1fr)" gap={4}>
  <GridItem colSpan={2} h={40} bg="scene.warning.normal" />
  <GridItem colStart={4} colEnd={6} h={40} bg="scene.success.normal" />
</Grid>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"Grid Props"}),`
`,n(r,{data:[{name:"autoColumns",desc:"Shorthand prop for gridAutoColumns"},{name:"autoFlow",desc:"Shorthand prop for gridAutoFlow"},{name:"autoRows",desc:"Shorthand prop for gridAutoRows"},{name:"column",desc:"Shorthand prop for gridColumn"},{name:"row",desc:"Shorthand prop for gridRow"},{name:"templateAreas",desc:"Shorthand prop for gridTemplateAreas"},{name:"templateColumns",desc:"Shorthand prop for gridTemplateColumns"},{name:"templateRows",desc:"Shorthand prop for gridTemplateRows"}]}),`
`,n(e.h3,{children:"GridItem Props"}),`
`,n(r,{data:[{name:"area",desc:"Shorthand prop for gridArea"},{name:"colEnd",type:'ResponsiveValue<number | "auto">',desc:"The column number the grid item should end."},{name:"colSpan",type:'ResponsiveValue<number | "auto">',desc:"The number of columns the grid item should span."},{name:"colStart",type:'ResponsiveValue<number | "auto">',desc:"The column number the grid item should start."},{name:"rowEnd",type:'ResponsiveValue<number | "auto">',desc:"The row number the grid item should end."},{name:"rowSpan",type:'ResponsiveValue<number | "auto">',desc:"The number of rows the grid item should span."},{name:"rowStart",type:'ResponsiveValue<number | "auto">',desc:"The row number the grid item should start."}]})]})}function wo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(de,t)})):de(t)}function To(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function se(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Co("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Simple Grid"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { SimpleGrid } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<SimpleGrid columns={2} spacing={10}>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
</SimpleGrid>
`})}),`
`,n(e.h2,{children:"Responsive columns"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<SimpleGrid columns={[2, null, 3]} spacing={[10, 20, 40]}>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
</SimpleGrid>
`})}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<SimpleGrid columns={2} spacingX={40} spacingY={10}>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
  <Box bg="scene.warning.normal" h={80}></Box>
</SimpleGrid>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"spacing",type:"Responsive<number | string>",desc:"The gap between the grid items"},{name:"spacingX",type:"Responsive<number | string>",desc:"The column gap between the grid items"},{name:"spacingY",type:"Responsive<number | string>",desc:"The row gap between the grid items"},{name:"autoColumns",desc:"Shorthand prop for gridAutoColumns"},{name:"autoFlow",desc:"Shorthand prop for gridAutoFlow"},{name:"autoRows",desc:"Shorthand prop for gridAutoRows"},{name:"column",desc:"Shorthand prop for gridColumn"},{name:"columns",desc:"The number of columns"},{name:"row",desc:"Shorthand prop for gridRow"},{name:"templateAreas",desc:"Shorthand prop for gridTemplateAreas"},{name:"templateColumns",desc:"Shorthand prop for gridTemplateColumns"},{name:"templateRows",desc:"Shorthand prop for gridTemplateRows"}]})]})}function vo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(se,t)})):se(t)}function Co(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function he(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Bo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Stack"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Stack } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Stack>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</Stack>
`})}),`
`,n(e.h2,{children:"Responsive direction"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Stack direction={['column', 'row']} spacing={24}>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</Stack>
`})}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Stack spacing={24}>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</Stack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"direction",type:"column | column-reverse | row | row-reverse",default:"column",desc:"The direction to stack the items."},{name:"align",desc:"Shorthand for alignItems style prop"},{name:"justify",desc:"Shorthand for justifyContent style prop"},{name:"spacing",type:"Responsive<string | number>",default:4,desc:"The space between each child"}]})]})}function Io(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(he,t)})):he(t)}function Bo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ue(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||ko("PropsTable",!0),o(i,{children:[n(e.h1,{children:"HStack"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { HStack } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</HStack>
`})}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<HStack spacing={24}>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</HStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"align",desc:"Shorthand for alignItems style prop"},{name:"justify",desc:"Shorthand for justifyContent style prop"},{name:"spacing",type:"Responsive<string | number>",default:4,desc:"The space between each child"}]})]})}function So(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ue,t)})):ue(t)}function ko(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function me(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||jo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"VStack"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { VStack } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</VStack>
`})}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack spacing={24}>
  <Box w={40} h={40} bg="scene.warning.normal">
    1
  </Box>
  <Box w={40} h={40} bg="scene.danger.normal">
    2
  </Box>
  <Box w={40} h={40} bg="scene.success.normal">
    3
  </Box>
</VStack>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"align",desc:"Shorthand for alignItems style prop"},{name:"justify",desc:"Shorthand for justifyContent style prop"},{name:"spacing",type:"Responsive<string | number>",default:4,desc:"The space between each child"}]})]})}function Mo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(me,t)})):me(t)}function jo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function pe(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Eo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Wrap"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Wrap, WrapItem } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <WrapItem>
    <Center w={240} h={80} bg="scene.success.normal">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.danger.normal">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.primary.normal">
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 5
    </Center>
  </WrapItem>
</Wrap>
`})}),`
`,n(e.h2,{children:"Spacing"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap spacing={30}>
  <WrapItem>
    <Center w={240} h={80} bg="scene.success.normal">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.danger.normal">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.primary.normal">
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 5
    </Center>
  </WrapItem>
</Wrap>
`})}),`
`,n(e.h2,{children:"Alignment"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap spacing={30} align="center">
  <WrapItem>
    <Center w={240} h={80} bg="scene.success.normal">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={40} bg="scene.danger.normal">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={40} bg="scene.primary.normal">
      Box 4
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w={240} h={80} bg="scene.warning.normal">
      Box 5
    </Center>
  </WrapItem>
</Wrap>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"align",desc:"The `align-items` value (for main axis alignment)"},{name:"direction",desc:"The `flex-direction` value"},{name:"justify",desc:"The `justify-content` value (for cross-axis alignment)"},{name:"spacing",type:"Responsive<string | number>",default:4,desc:"The space between each child"},{name:"spacingX",type:"Responsive<string | number>",desc:"The horizontal space between the each child."},{name:"spacingY",type:"Responsive<string | number>",desc:"The vertical space between the each child."}]})]})}function Po(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(pe,t)})):pe(t)}function Eo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ge(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p"},t.components),{PropsTable:r}=e;return r||No("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Image"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Image } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Image
  boxSize={150}
  src="https://img1.baidu.com/it/u=967842666,1452755666&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
/>
`})}),`
`,n(e.h2,{children:"Fallback"}),`
`,o(e.h3,{children:["Using ",n(e.code,{children:"fallbackSrc"})]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Image src="not-exists.png" fallbackSrc="https://via.placeholder.com/150" />
`})}),`
`,o(e.h3,{children:["Using ",n(e.code,{children:"fallback"})," component"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Image
  src="not-exists.png"
  fallback={
    <Square size={200} bg="scene.warning.normal">
      <Http404Icon size={'plus'} />
    </Square>
  }
/>
`})}),`
`,n(e.h2,{children:"FallbackStrategy"}),`
`,o(e.h3,{children:["Using ",n(e.code,{children:"onError"})]}),`
`,o(e.p,{children:["Fallabck behavior will be triggered only when image ",n(e.code,{children:"load error"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [src, setSrc] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSrc('not-exists.png');
    }, 3000);
  }, []);

  return (
    <Box h={200}>
      <Image
        src={src}
        fallbackStrategy="onError"
        fallback={
          <Square size={200} bg="scene.warning.normal">
            <Http404Icon size={'plus'} />
          </Square>
        }
      />
    </Box>
  );
}
`})}),`
`,o(e.h3,{children:["Using ",n(e.code,{children:"beforeLoadOrError"})]}),`
`,o(e.p,{children:["Fallabck behavior will be triggered when image ",n(e.code,{children:"src is empty"})," or ",n(e.code,{children:"load error"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [src, setSrc] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSrc('not-exists.png');
    }, 3000);
  }, []);

  return (
    <Box h={200}>
      <Image
        src={src}
        fallbackStrategy="beforeLoadOrError"
        fallback={
          <Square size={200} bg="scene.success.normal" color="white">
            Some text
          </Square>
        }
      />
    </Box>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"src",type:"string"},{name:"fallbackSrc",type:"string"},{name:"fallback",type:"string"},{name:"loading",type:"'eager' | 'lazy'",default:"eager"},{name:"fit",type:"SystemProps['objectFit']"},{name:"align",type:"SystemProps['objectPosition']"},{name:"fallbackStrategy",type:"'onError' | 'beforeLoadOrError'",default:"beforeLoadOrError"}]})]})}function Do(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ge,t)})):ge(t)}function No(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function be(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{AllIcons:r,PropsTable:l}=e;return r||fe("AllIcons",!0),l||fe("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Icon"}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`npm i @totejs/icons
`})}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ColoredWarningIcon, DefenseIcon } from '@totejs/icons';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <ColoredWarningIcon />
  <DefenseIcon />
  <DeleteIcon color="scene.success.normal" />
</Wrap>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  {/* 16px */}
  <ColoredWarningIcon size="sm" />

  {/* 20px */}
  <ColoredWarningIcon size="md" />

  {/* 24px */}
  <ColoredWarningIcon size="lg" />

  {/* 32px */}
  <ColoredWarningIcon size="plus" />

  {/* 40px */}
  <ColoredWarningIcon size="xp" />

  {/* 80px */}
  <ColoredWarningIcon size="xl" />

  {/* 160px */}
  <ColoredWarningIcon size="xxl" />
</Wrap>
`})}),`
`,n(e.h2,{children:"Changing colored icon's color"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Wrap>
  <ColoredInfoIcon />
  <ColoredInfoIcon fill="red" />
</Wrap>
`})}),`
`,n(e.h2,{children:"All icons"}),`
`,n(r,{}),`
`,n(e.h2,{children:"Creating your custom icons"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Icon } from '@totejs/icons';
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const CicleIcon = (props) => (
    <Icon viewBox="0 0 200 200" {...props}>
      <path fill="currentColor" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" />
    </Icon>
  );

  return (
    <Wrap>
      <CicleIcon boxSize={50} color="scene.danger.normal" />
      <CicleIcon boxSize={50} color="scene.success.normal" />
    </Wrap>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(l,{data:[{name:"size",type:"'sm | md | lg | plus | xp' | 'xl' | 'xxl'",default:"lg"}]})]})}function Lo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(be,t)})):be(t)}function fe(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function xe(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Oo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Link"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Link } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Link>I'm a Link</Link>
`})}),`
`,n(e.h2,{children:"External Link"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Link href="https://www.baidu.com" isExternal>
  go to baidu
  <LinkIcon mx="2px" />
</Link>
`})}),`
`,n(e.h2,{children:"ColorScheme"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <VStack align="flex-start">
      {['primary', 'success', 'warning', 'danger'].map((item) => (
        <Link colorScheme={item} href="" key={item}>
          {item} Link
        </Link>
      ))}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"colorShceme",type:'"primary" | "success" | "danger" | "warning"',default:'"primary"'},{name:"isExternal",type:"boolean",desc:"If true, the link will open in new tab"}]})]})}function Ro(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(xe,t)})):xe(t)}function Oo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ye(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Fo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Portal"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Portal } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Box bg="scene.warning.normal" color="white">
      I'm here,
      <Portal>
        <Center
          position="fixed"
          top={100}
          right={0}
          zIndex={999}
          bg="scene.warning.normal"
          w={250}
          p={24}
        >
          This text is portaled at the end of document.body!
        </Center>
      </Portal>
    </Box>
  );
}
`})}),`
`,n(e.h2,{children:"Using a custom container"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const ref = React.useRef();
  return (
    <Box bg="scene.warning.normal" color="white">
      I'm here,
      <Portal containerRef={ref}>Portal: This text is portaled to the yellow box!</Portal>
      <Box ref={ref} bg="scene.danger.normal">
        <div>Container: Hey,</div>
      </Box>
    </Box>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"children",required:!0,type:"ReactNode",desc:"The content or node you'll like to portal."},{name:"containerRef",type:"RefObject<HTMLElement | null>",default:"document.body",desc:"The ref to the component where the portal will be attached to."}]})]})}function zo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ye,t)})):ye(t)}function Fo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function we(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Ao("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Modal"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Modal, ModalHeader, ModalBody, ModalFooter, ModalCloseButton } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalCloseButton />
        <ModalHeader>Title</ModalHeader>
        <ModalBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
          consequat veniam incididunt duis in sint irure nisi.
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  function Component(props) {
    const { size } = props;
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onToggle}>{size}</Button>

        <Modal size={size} isOpen={isOpen} onClose={onClose}>
          <ModalCloseButton />
          <ModalHeader>Title</ModalHeader>
          <ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
            consequat veniam incididunt duis in sint irure nisi.
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }

  return (
    <HStack>
      <Component size="sm" />
      <Component size="md" />
      <Component size="lg" />
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isOpen",required:!0,type:"boolean",default:!1},{name:"onClose",required:!0,type:"() => void;"},{name:"closeOnOverlayClick",type:"boolean",default:!0,desc:"Close modal when click overlay."},{name:"onOverlayClick",type:"() => void;"},{name:"size",type:"'sm' | 'md' | 'lg'",default:"md"},{name:"rootProps",type:"HTMLProps<'div'>",desc:"Modal root element's props."},{name:"overlayProps",type:"HTMLProps<'div'>",desc:"Modal overlay element's props."}]})]})}function _o(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(we,t)})):we(t)}function Ao(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Te(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Vo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"StateModal"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { StateModal } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <StateModal
        isOpen={isOpen}
        onClose={onToggle}
        title="Successfully"
        description="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt."
      >
        <Button size="md" variant="ghost" onClick={onToggle}>
          Cancel
        </Button>
        <Button size="md">Confirm</Button>
      </StateModal>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  function Component(props) {
    const { size } = props;
    const { isOpen, onToggle } = useDisclosure();

    return (
      <>
        <Button onClick={onToggle}>{size}</Button>

        <StateModal
          size={size}
          isOpen={isOpen}
          onClose={onToggle}
          title="Successfully"
          description="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt."
        >
          <Button size="md" variant="ghost" onClick={onToggle}>
            Cancel
          </Button>
          <Button size="md">Confirm</Button>
        </StateModal>
      </>
    );
  }

  return (
    <HStack>
      <Component size="sm" />
      <Component size="md" />
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  function Component(props) {
    const { variant, title } = props;
    const { isOpen, onToggle } = useDisclosure();

    return (
      <>
        <Button onClick={onToggle}>{variant}</Button>

        <StateModal
          isOpen={isOpen}
          onClose={onToggle}
          variant={variant}
          title={title}
          description="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt."
        >
          <Button size="md" variant="ghost" onClick={onToggle}>
            Cancel
          </Button>
          <Button size="md">Confirm</Button>
        </StateModal>
      </>
    );
  }

  return (
    <HStack>
      <Component variant="info" title="Info" />
      <Component variant="warning" title="Warning" />
      <Component variant="success" title="Successfully" />
      <Component variant="error" title="Failed" />
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Customizing icon"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <StateModal
        isOpen={isOpen}
        onClose={onToggle}
        icon={<SkeletonIcon size="xl" />}
        title="Successfully"
        description="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt."
      >
        <Button size="md" variant="ghost" onClick={onToggle}>
          Cancel
        </Button>
        <Button size="md">Confirm</Button>
      </StateModal>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isOpen",required:!0,type:"boolean",default:!1},{name:"onClose",required:!0,type:"() => void;"},{name:"variant",type:"'info' | 'warning' | 'success' | 'error'"},{name:"icon",type:"React.ReactNode"},{name:"title",type:"React.ReactNode"},{name:"description",type:"React.ReactNode"},{name:"closeOnOverlayClick",type:"boolean",default:!0,desc:"Close modal when click overlay."},{name:"onOverlayClick",type:"() => void;"},{name:"size",type:"'sm' | 'md'",default:"md"},{name:"rootProps",type:"HTMLProps<'div'>",desc:"Modal root element's props."},{name:"overlayProps",type:"HTMLProps<'div'>",desc:"Modal overlay element's props."}]})]})}function $o(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Te,t)})):Te(t)}function Vo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ve(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},t.components),{PropsTable:r}=e;return r||Xo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Tooltip"}),`
`,o(e.p,{children:["If the children of ",n(e.code,{children:"Tooltip"})," is a ",n(e.code,{children:"string"}),", we should wrap with in a ",n(e.code,{children:"span"}),". If the ",n(e.code,{children:"Tooltip"}),` is
wrapping a functional component, ensure that the functional component accepts a `,n(e.code,{children:"ref"}),` using
`,n(e.code,{children:"forwardRef"}),"."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Tooltip } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = (event) => {
    setIsOpen(event.target.checked);
  };

  return (
    <HStack>
      <Tooltip
        isOpen={isOpen}
        content={
          'If the children of Tooltip is a string, we should wrap with in a span. If the Tooltip is wrapping a functional component, ensure that the functional component accepts a ref using forwardRef.'
        }
      >
        <Circle bg="scene.warning.normal" color="white" boxSize={40}>
          <SunIcon />
        </Circle>
      </Tooltip>

      <Switch isChecked={isOpen} onChange={onOpen}>
        Click to {isOpen ? 'hide' : 'show'} tooltip
      </Switch>
    </HStack>
  );
}
`})}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Tooltip
      content={
        'If the children of Tooltip is a string, we should wrap with in a span. If the Tooltip is wrapping a functional component, ensure that the functional component accepts a ref using forwardRef.'
      }
    >
      <Circle bg="scene.warning.normal" color="white" boxSize={40}>
        <SunIcon />
      </Circle>
    </Tooltip>
  );
}
`})}),`
`,n(e.h2,{children:"Placement"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const placements = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ];

  return (
    <SimpleGrid columns={3} gap={24}>
      {placements.map((item, index) => (
        <Tooltip content={item} placement={item} key={item}>
          <Button size="lg">{item}</Button>
        </Tooltip>
      ))}
    </SimpleGrid>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"content",type:"React.ReactNode"},{name:"isOpen",type:"boolean",default:!1,desc:"If true, the popover will be shown (in controlled mode)"},{name:"defaultIsOpen",type:"boolean",default:!1,desc:"If true, the popover will be initially shown"},{name:"placement",type:"'follow' | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'",default:"top"},{name:"trigger",type:"'click' | 'hover'",default:"click"},{name:"isLazy",type:"boolean",default:!0},{name:"lazyBehavior",type:"'keepMounted' | 'unmount'",default:"keepMounted"},{name:"closeOnBlur",type:"boolean",default:!0},{name:"closeOnEsc",type:"boolean",default:!0},{name:"openDelay",type:"number",default:"0ms"},{name:"closeDelay",type:"number",default:"0ms"},{name:"onClose",type:"() => void",desc:"Callback to run when the tooltip hides"},{name:"onOpen",type:"() => void",desc:"Callback to run when the tooltip shows"},{name:"offset",type:"[number, number]",desc:"The main and cross-axis offset to displace popper element from its reference element."},{name:"gutter",type:"number",default:"12",desc:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter."},{name:"strategy",type:'"absolute" | "fixed"',default:"absolute",desc:"The CSS positioning strategy to use."},{name:"modifiers",desc:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass. @see docs: https://popper.js.org/docs/v2/modifiers/"}]})]})}function Ho(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ve,t)})):ve(t)}function Xo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Ce(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||Wo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Popover"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverFooter,
  PopoverTrigger,
  PopoverButton,
  PopoverSecondaryButton,
  PopoverPrimaryButton,
} from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        <PopoverFooter>
          <PopoverSecondaryButton>Cancle</PopoverSecondaryButton>
          <PopoverPrimaryButton>Confirm</PopoverPrimaryButton>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <Button onClick={onToggle}>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton onClick={onClose} />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
        <PopoverFooter>
          <PopoverSecondaryButton onClick={onClose}>Cancle</PopoverSecondaryButton>
          <PopoverPrimaryButton>Confirm</PopoverPrimaryButton>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
`})}),`
`,n(e.h2,{children:"Placement"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const placements = [
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ];

  return (
    <SimpleGrid columns={3} gap={24}>
      {placements.map((item, index) => (
        <Popover placement={item} key={item}>
          <PopoverTrigger>
            <Button>{item}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            <PopoverFooter>
              <PopoverSecondaryButton>Cancle</PopoverSecondaryButton>
              <PopoverPrimaryButton>Confirm</PopoverPrimaryButton>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      ))}
    </SimpleGrid>
  );
}
`})}),`
`,n(e.h2,{children:"Trigger"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const triggers = ['click', 'hover'];

  return (
    <SimpleGrid columns={3} gap={24}>
      {triggers.map((item, index) => (
        <Popover trigger={item} key={item}>
          <PopoverTrigger>
            <Button>{item}</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            <PopoverFooter>
              <PopoverSecondaryButton>Cancle</PopoverSecondaryButton>
              <PopoverPrimaryButton>Confirm</PopoverPrimaryButton>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      ))}
    </SimpleGrid>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"Popover"}),`
`,n(r,{data:[{name:"isOpen",type:"boolean",default:!1,desc:"If true, the popover will be shown (in controlled mode)"},{name:"defaultIsOpen",type:"boolean",default:!1,desc:"If true, the popover will be initially shown"},{name:"placement",type:"'follow' | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'",default:"top"},{name:"trigger",type:"'click' | 'hover'",default:"click"},{name:"isLazy",type:"boolean",default:!0},{name:"lazyBehavior",type:"'keepMounted' | 'unmount'",default:"keepMounted"},{name:"closeOnBlur",type:"boolean",default:!0},{name:"closeOnEsc",type:"boolean",default:!0},{name:"openDelay",type:"number",default:"200ms"},{name:"closeDelay",type:"number",default:"200ms"},{name:"onClose",type:"() => void",desc:"Callback to run when the tooltip hides"},{name:"onOpen",type:"() => void",desc:"Callback to run when the tooltip shows"},{name:"offset",type:"[number, number]",desc:"The main and cross-axis offset to displace popper element from its reference element."},{name:"gutter",type:"number",default:"12",desc:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter."},{name:"strategy",type:'"absolute" | "fixed"',default:"absolute",desc:"The CSS positioning strategy to use."},{name:"matchWidth",default:!1,desc:"If true, the popper will match the width of the reference at all times."},{name:"modifiers",desc:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass. @see docs: https://popper.js.org/docs/v2/modifiers/"}]}),`
`,n(e.h3,{children:"PopoverContent"}),`
`,n(r,{data:[{name:"rootProps",type:"HTMLProps<'div'>",desc:"the popper element props"}]}),`
`,n(e.h3,{children:"PopoverArrow"}),`
`,n(r,{data:[{name:"offset",type:"ResponsiveValue<number | string>",default:-6}]}),`
`,n(e.h3,{children:"PopoveButton"}),`
`,n(r,{data:[{name:"variant",type:"'primary' | 'second'",default:"primary"},{name:"isClosable",type:"boolean",default:!0,desc:"If true, the popover will be close when click the button"}]}),`
`,n(e.h2,{children:"Examples"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Popover>
  <PopoverTrigger>
    <Box
      borderRadius={4}
      w={55}
      h={24}
      bg="bg.top.normal"
      _hover={{ bg: 'bg.top.active' }}
      cursor="pointer"
    />
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Title</PopoverHeader>
    <PopoverBody>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
      consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim
      nostrud elit officia tempor esse quis. Sunt ad dolore quis aute. Mollit officia cillum Lorem
      ullamco minim nostrud elit officia tempor esse quis.
    </PopoverBody>
    <PopoverFooter>
      <PopoverSecondaryButton>Button</PopoverSecondaryButton>
      <PopoverPrimaryButton>Button</PopoverPrimaryButton>
    </PopoverFooter>
  </PopoverContent>
</Popover>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Popover>
  <PopoverTrigger>
    <Box
      borderRadius={4}
      w={55}
      h={24}
      bg="bg.top.normal"
      _hover={{ bg: 'bg.top.active' }}
      cursor="pointer"
    />
  </PopoverTrigger>
  <PopoverContent maxW={445}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody pr={12}>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
      consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim
      nostrud elit officia tempor esse quis. Sunt ad dolore quis aute. Mollit officia cillum Lorem
      ullamco minim nostrud elit officia tempor esse quis.
    </PopoverBody>
    <PopoverFooter>
      <PopoverPrimaryButton>Button</PopoverPrimaryButton>
    </PopoverFooter>
  </PopoverContent>
</Popover>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`<Popover>
  <PopoverTrigger>
    <Box
      borderRadius={4}
      w={55}
      h={24}
      bg="bg.top.normal"
      _hover={{ bg: 'bg.top.active' }}
      cursor="pointer"
    />
  </PopoverTrigger>
  <PopoverContent maxW={361}>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
      consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim
      nostrud elit officia tempor esse quis. Sunt ad dolore quis aute. Mollit officia cillum Lorem
      ullamco minim nostrud elit officia tempor esse quis.
    </PopoverBody>
  </PopoverContent>
</Popover>
`})})]})}function Go(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ce,t)})):Ce(t)}function Wo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Ie(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3",p:"p"},t.components),{PropsTable:r}=e;return r||qo("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Menu"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuGroupTitle,
  MenuList,
  MenuItem,
  MenuItemDescription,
} from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Menu>
      <MenuButton as={Button}>show</MenuButton>
      <MenuList w={280}>
        <MenuItem icon={<SunIcon />}>
          Option 1<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<MoonIcon />}>
          Option 2<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<SettingIcon />}>
          Option 3<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Menu isOpen={isOpen}>
      <MenuButton as={Button} onClick={onToggle}>
        show
      </MenuButton>
      <MenuList w={280}>
        <MenuItem icon={<SunIcon />} onClick={onClose}>
          Option 1<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<MoonIcon />} onClick={onClose}>
          Option 2<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<SettingIcon />} onClick={onClose}>
          Option 3<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h2,{children:"Variants"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Stack direction="row">
      {['filled', 'rounded'].map((item) => (
        <Menu variant={item} key={item}>
          <MenuButton as={Button}>{item}</MenuButton>
          <MenuList w={280}>
            <MenuItem icon={<SunIcon />}>
              Option 1<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
            <MenuItem icon={<MoonIcon />}>
              Option 2<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
            <MenuItem icon={<SettingIcon />}>
              Option 3<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
          </MenuList>
        </Menu>
      ))}
    </Stack>
  );
}
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Stack direction="row">
      {['sm', 'md'].map((item) => (
        <Menu size={item} key={item}>
          <MenuButton as={Button}>{item}</MenuButton>
          <MenuList w={280}>
            <MenuItem icon={<SunIcon />}>
              Option 1<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
            <MenuItem icon={<MoonIcon />}>
              Option 2<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
            <MenuItem icon={<SettingIcon />}>
              Option 3<MenuItemDescription>additional content</MenuItemDescription>
            </MenuItem>
          </MenuList>
        </Menu>
      ))}
    </Stack>
  );
}
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Menu>
      <MenuButton as={Button}>show</MenuButton>
      <MenuList w={280}>
        <MenuItem icon={<SunIcon />}>
          Option 1<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem isDisabled icon={<MoonIcon />}>
          Option 2<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem isDisabled icon={<SettingIcon />}>
          Option 3<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h2,{children:"Icon and right element"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const RightElement = (
    <Box>
      Go <GoIcon size="sm" />
    </Box>
  );

  return (
    <Menu>
      <MenuButton as={Button}>show</MenuButton>
      <MenuList w={280}>
        <MenuItem icon={<SunIcon />} rightElement={RightElement} isDisabled>
          Option 1<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<MoonIcon />} rightElement={RightElement}>
          Option 2<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<SettingIcon />} rightElement={RightElement}>
          Option 3<MenuItemDescription>additional content</MenuItemDescription>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h2,{children:"Menu group"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <Menu size="md">
      <MenuButton as={Button}>show</MenuButton>
      <MenuList flexDirection="row">
        <MenuGroup w={250}>
          <MenuGroupTitle>RESOURCES</MenuGroupTitle>
          <MenuItem icon={<SunIcon />}>
            Option 1<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<MoonIcon />}>
            Option 2<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<SettingIcon />}>
            Option 3<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
        </MenuGroup>
        <MenuGroup w={250}>
          <MenuGroupTitle>TOOLS</MenuGroupTitle>
          <MenuItem icon={<SunIcon />}>
            Option 1<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<MoonIcon />}>
            Option 2<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<SettingIcon />}>
            Option 3<MenuItemDescription>additional content</MenuItemDescription>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h2,{children:"Accessing the internal state"}),`
`,o(e.p,{children:["To access the internal state of the ",n(e.code,{children:"Menu"}),", use a function as ",n(e.code,{children:"children"}),` (commonly known as a render
prop). You'll get access to the internal state `,n(e.code,{children:"isOpen"})," and method ",n(e.code,{children:"onClose"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Menu>
  {({ isOpen }) => (
    <>
      <MenuButton
        isActive={isOpen}
        as={Button}
        rightIcon={isOpen ? <MenuOpenIcon /> : <MenuCloseIcon />}
      >
        {isOpen ? 'Close' : 'Open'}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
      </MenuList>
    </>
  )}
</Menu>
`})}),`
`,n(e.h2,{children:"Customizing the button"}),`
`,o(e.p,{children:["If you want to customize the ",n(e.code,{children:"MenuButton"}),", remember to use ",n(e.code,{children:"forwardRef"}),", because the ",n(e.code,{children:"popover"}),` needs
`,n(e.code,{children:"ref"})," to calculate where it appears."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const CustomMenuButton = forwardRef((props, ref) => {
    const { children, ...restProps } = props;

    return (
      <Button
        ref={ref}
        w="100%"
        variant="ghost"
        justifyContent="space-between"
        px={12}
        fontWeight={600}
        fontSize={14}
        lineHeight={'17px'}
        _expanded={{
          '.ui-icon': {
            transform: 'rotate(-180deg)',
          },
        }}
        {...restProps}
      >
        <Flex align={'center'}>
          <Center boxSize={24} mr={6}>
            <Circle size={10} bg="scene.primary.normal" />
          </Center>
          {children}
        </Flex>
        <MenuCloseIcon transitionDuration="normal" />
      </Button>
    );
  });

  const menus = ['Devnet', 'Testnet', 'Mainnet'];
  const [value, setValue] = useState(menus[0]);

  const onChangeValue = (value) => {
    setValue(value);
  };

  return (
    <Menu matchWidth={true} placement="bottom-start">
      <MenuButton as={CustomMenuButton}>{value}</MenuButton>
      <MenuList borderRadius={8}>
        {menus.map((item) => (
          <MenuItem key={item} onClick={() => onChangeValue(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"Menu"}),`
`,n(r,{data:[{name:"size",type:"'md' | 'sm'",default:"sm"},{name:"variant",type:"'filled' | 'rounded'",default:"filled"},{name:"isOpen",type:"boolean",default:!1,desc:"If true, the menu will be shown (in controlled mode)"},{name:"defaultIsOpen",type:"boolean",default:!1,desc:"If true, the menu will be initially shown"},{name:"placement",type:"'follow' | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'",default:"top"},{name:"trigger",type:"'click' | 'hover'",default:"click"},{name:"isLazy",type:"boolean",default:!0},{name:"lazyBehavior",type:"'keepMounted' | 'unmount'",default:"keepMounted"},{name:"closeOnBlur",type:"boolean",default:!0},{name:"closeOnEsc",type:"boolean",default:!0},{name:"closeOnSelect",type:"boolean",default:!0,desc:"If true, the menu will be hidden when click items"},{name:"openDelay",type:"number",default:"200ms"},{name:"closeDelay",type:"number",default:"200ms"},{name:"onClose",type:"() => void",desc:"Callback to run when the tooltip hides"},{name:"onOpen",type:"() => void",desc:"Callback to run when the tooltip shows"},{name:"offset",type:"[number, number]",desc:"The main and cross-axis offset to displace popper element from its reference element."},{name:"gutter",type:"number",default:"12",desc:"The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter."},{name:"strategy",type:'"absolute" | "fixed"',default:"absolute",desc:"The CSS positioning strategy to use."},{name:"matchWidth",default:!1,desc:"If true, the popper will match the width of the reference at all times."},{name:"modifiers",desc:"Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass. @see docs: https://popper.js.org/docs/v2/modifiers/"}]}),`
`,n(e.h3,{children:"MenuItem"}),`
`,n(r,{data:[{name:"icon",type:"React.ReactElement"},{name:"rightElement",type:"React.ReactElement"},{name:"isDisabled",type:"boolean",default:!1},{name:"closeOnSelect",type:"boolean",default:!0,desc:"If true, the menu will be hidden when click items"}]}),`
`,n(e.h2,{children:"Examples"}),`
`,n(e.h3,{children:"Style1"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`function Example() {
  function Component(props) {
    const {
      text,
      width,
      size = 'sm',
      showDesc = false,
      showIcon = false,
      showRight = false,
      list,
    } = props;

    return (
      <Menu variant="filled" size={size}>
        <MenuButton as={Button}>{text}</MenuButton>
        <MenuList w={width}>
          {list.map((item, index) => (
            <MenuItem
              key={index}
              isDisabled={item.isDisabled}
              icon={showIcon ? item.icon : null}
              rightElement={showRight ? item.right : null}
            >
              {item.title}
              {showDesc && <MenuItemDescription>{item.desc}</MenuItemDescription>}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  const Right = (
    <Box>
      Text <GoIcon size="sm" />
    </Box>
  );

  const menuList = [
    {
      title: 'Option1',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
    {
      title: 'Option2 disable',
      icon: <CoinsIcon />,
      right: Right,
      isDisabled: true,
      desc: 'additional content',
    },
    {
      title: 'Option3 hover',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
    {
      title: 'Option4 has a long text name',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
  ];

  return (
    <Stack direction="column" spacing={16}>
      <Heading fontSize={18}>small size: </Heading>
      <Stack direction="row">
        <Component text="case 1" width={200} list={menuList} />
        <Component text="case 2" width={240} list={menuList} showIcon />
        <Component text="case 3" width={260} list={menuList} showIcon showRight />
      </Stack>

      <Divider />

      <Heading fontSize={18}>medium size: </Heading>
      <Stack direction="row">
        <Component size="md" text="case 1" width={260} list={menuList} showDesc />
        <Component size="md" text="case 2" width={280} list={menuList} showDesc showIcon />
        <Component
          size="md"
          text="case 3"
          width={280}
          list={menuList}
          showDesc
          showIcon
          showRight
        />
      </Stack>
    </Stack>
  );
}
`})}),`
`,n(e.h3,{children:"Style2"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`function Example() {
  function Component(props) {
    const {
      text,
      width,
      size = 'sm',
      showDesc = false,
      showIcon = false,
      showRight = false,
      list,
    } = props;

    return (
      <Menu variant="rounded" size={size}>
        <MenuButton as={Button}>{text}</MenuButton>
        <MenuList w={width}>
          {list.map((item, index) => (
            <MenuItem
              key={index}
              isDisabled={item.isDisabled}
              icon={showIcon ? item.icon : null}
              rightElement={showRight ? item.right : null}
            >
              {item.title}
              {showDesc && <MenuItemDescription>{item.desc}</MenuItemDescription>}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }

  const Right = (
    <Box>
      Text <GoIcon size="sm" />
    </Box>
  );

  const menuList = [
    {
      title: 'Option1',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
    {
      title: 'Option2 disable',
      icon: <CoinsIcon />,
      right: Right,
      isDisabled: true,
      desc: 'additional content',
    },
    {
      title: 'Option3 hover',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
    {
      title: 'Option4 has a long text name',
      icon: <CoinsIcon />,
      right: Right,
      desc: 'additional content',
    },
  ];

  return (
    <Stack direction="column" spacing={16}>
      <Heading fontSize={18}>small size: </Heading>
      <Stack direction="row">
        <Component text="case 1" width={200} list={menuList} />
        <Component text="case 2" width={240} list={menuList} showIcon />
        <Component text="case 3" width={260} list={menuList} showIcon showRight />
      </Stack>

      <Divider />

      <Heading fontSize={18}>medium size: </Heading>
      <Stack direction="row">
        <Component size="md" text="case 1" width={260} list={menuList} showDesc />
        <Component size="md" text="case 2" width={280} list={menuList} showDesc showIcon />
        <Component
          size="md"
          text="case 3"
          width={280}
          list={menuList}
          showDesc
          showIcon
          showRight
        />
      </Stack>
    </Stack>
  );
}
`})}),`
`,n(e.h3,{children:"Case"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`function Example() {
  return (
    <Menu size="md" variant="rounded">
      <MenuButton as={Button}>case 1</MenuButton>
      <MenuList w={333}>
        <MenuItem icon={<CoinsIcon />}>
          MegaNode<MenuItemDescription>Fastest and Reliable API Service</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<CoinsIcon />}>
          API Marketplace
          <MenuItemDescription>Build for Developers, by Developers</MenuItemDescription>
        </MenuItem>
        <MenuItem icon={<CoinsIcon />}>
          Semita<MenuItemDescription>Custom blockchain on Application Chain</MenuItemDescription>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",folder:"true",children:`function Example() {
  return (
    <Menu size="md" variant="rounded">
      <MenuButton as={Button}>case 2</MenuButton>
      <MenuList flexDirection="row">
        <MenuGroup w={309}>
          <MenuGroupTitle>RESOURCES</MenuGroupTitle>
          <MenuItem icon={<DocIcon fill="readable.secondary" />}>
            Documentation<MenuItemDescription>Up-to-date docs for developers</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<GlobalIcon fill="readable.secondary" />}>
            GitHub
            <MenuItemDescription>Explore our tech repositories</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<PaperMapIcon fill="readable.secondary" />}>
            Tutorials
            <MenuItemDescription>Learn how to get started with NodeReal</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<PulseIcon fill="readable.secondary" />}>
            Status<MenuItemDescription>Track NodeReal's system performance</MenuItemDescription>
          </MenuItem>
        </MenuGroup>

        <MenuGroup w={309}>
          <MenuGroupTitle>TOOLS</MenuGroupTitle>
          <MenuItem icon={<MenuIcon fill="#F0B90B" />}>
            BNB Chain List
            <MenuItemDescription>A list of BNB Chain related networks</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<DappIcon fill="#F0B90B" />}>
            BNB Chain Dev Tools
            <MenuItemDescription>A list of tools for developing on BNB Chain</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<BlocksIcon fill="#F0B90B" />}>
            BSCTrace<MenuItemDescription>BSC Blockchain Explorer</MenuItemDescription>
          </MenuItem>
          <MenuItem icon={<BlocksIcon fill="#2AA372" />}>
            TraceMove
            <MenuItemDescription>Aptos Blockchain Explorer</MenuItemDescription>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
}
`})})]})}function Qo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ie,t)})):Ie(t)}function qo(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Be(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},t.components),{PropsTable:r}=e;return r||Ko("PropsTable",!0),o(i,{children:[n(e.h1,{children:"ColorModeScript"}),`
`,o(e.p,{children:[n(e.code,{children:"ColorModeScript"}),` will do some theme-related preparations for the app, it's import to add this
component.`]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ColorModeScript } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"For Next.js"}),`
`,o(e.p,{children:["For Next.js, you need to add the ",n(e.code,{children:"ColorModeScript"})," to the ",n(e.code,{children:"_document.tsx"})," file."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// pages/_document.tsx
import { ColorModeScript } from '@totejs/uikit';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from './theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* \u{1F447} Here's the script */}
          <ColorModeScript {...theme.config} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
`})}),`
`,n(e.h3,{children:"For Create React App"}),`
`,o(e.p,{children:["For Create React App, you need to add the ",n(e.code,{children:"ColorModeScript"})," to the ",n(e.code,{children:"index.tsx"})," file."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// index.tsx
import ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@totejs/uikit';
import App from './App';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ColorModeScript {...theme.config} />
    <App />
  </>,
);

`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"initialColorMode",type:'"system" | "light" | "dark"'},{name:"storageType",type:'"cookie" | "localStorage"'},{name:"storageKey",type:"string"},{name:"cookieDomain",type:"string"},{name:"nonce",type:"script's nonce"}]})]})}function Uo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Be,t)})):Be(t)}function Ko(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Se(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"DarkMode"}),`
`,o(e.p,{children:[`In some occasions, you might want components to look the same in both light and dark modes. To
achieve this, wrap the component in a `,n(e.code,{children:"LightMode"})," or ",n(e.code,{children:"DarkMode"})," component."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { DarkMode } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>

      <Divider my={12} />

      <VStack alignItems="flex-start">
        <LightMode w="100%">
          <Box bg="bg.middle" p={12}>
            <Heading fontSize="b">Always in Light Mode:</Heading>
            <Checkbox>Label</Checkbox>
            <Text>Some text</Text>
          </Box>
        </LightMode>
      </VStack>

      <Divider my={12} />

      <VStack alignItems="flex-start">
        <DarkMode color="dark.readable.normal" w="100%">
          <Box bg="bg.middle" p={12}>
            <Heading fontSize="b">Always in Dark Mode:</Heading>
            <Checkbox>Label</Checkbox>
            <Text>Some text</Text>
          </Box>
        </DarkMode>
      </VStack>
    </Box>
  );
}
`})})]})}function Yo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Se,t)})):Se(t)}function ke(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"LightMode"}),`
`,o(e.p,{children:[`In some occasions, you might want components to look the same in both light and dark modes. To
achieve this, wrap the component in a `,n(e.code,{children:"LightMode"})," or ",n(e.code,{children:"DarkMode"})," component."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { LightMode } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>

      <Divider my={12} />

      <VStack alignItems="flex-start">
        <LightMode w="100%">
          <Box bg="bg.middle" p={12}>
            <Heading fontSize="b">Always in Light Mode:</Heading>
            <Checkbox>Label</Checkbox>
            <Text>Some text</Text>
          </Box>
        </LightMode>
      </VStack>

      <Divider my={12} />

      <VStack alignItems="flex-start">
        <DarkMode color="dark.readable.normal" w="100%">
          <Box bg="bg.middle" p={12}>
            <Heading fontSize="b">Always in Dark Mode:</Heading>
            <Checkbox>Label</Checkbox>
            <Text>Some text</Text>
          </Box>
        </DarkMode>
      </VStack>
    </Box>
  );
}
`})})]})}function Jo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ke,t)})):ke(t)}function Me(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||er("PropsTable",!0),o(i,{children:[n(e.h1,{children:"ThemeProvider"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ThemeProvider } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { ThemeProvider } from '@totejs/uikit';
import { Theme } from '@totejs/uikit';
import { colors } from 'theme/colors';

export const theme: Theme = {
  // --- breakpoints ---
  breakpoints: {
    md: '768px',
    lg: '1200px',
  },

  // --- app config ---
  config: {
    // if true, will ignore \`initialColorMode\` and user settings, app will always follow the system's color mode.
    useSystemColorMode: false,

    // color mode behavior when user first enters the app, optional values: \`system\` | \`light\` | \`dark\`
    initialColorMode: 'system',

    // color mode storage key, use different keys for different apps, e.g. \`nodereal-ui-color-mode\`
    storageKey: '{app-name}-color-mode',

    // ssr must be \`cookie\`,  optional values: \`cookie\` | \`localStorage\`
    storageType: 'cookie',

    // prefix of component\u2019s class name and theme's css vars, e.g. \`ui-button\`, \`--ui-colors-readable-normal\`
    cssVarPrefix: 'ui',

    // If you want to share the color mode configuration in subdomains, you can set a parent domain.
    // e.g. setting: \`fe.nodereal.cc\`, \`mainnet.fe.nodereal.cc\` and \`testnet.fe.nodereal.cc\` will share the color mode configuration.
    cookieDomain: undefined,

    // Prevent components' transations when changing color mode
    preventTransition: true,
  },

  // --- global styles ---
  styles: {
    global: {
      body: {
        fontSize: 'b2',
        bg: 'bg.bottom',
        color: 'readable.normal',
      },
    },
  },

  ...colors,
};

function App() {
  return <ThemeProvider theme={theme}>{/* Components */}</ThemeProvider>;
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"theme",type:"Theme"},{name:"serverSideColorMode",type:"'light' | 'dark'",desc:"If you use ssr and need to render the correct theme on server, you can read the color mode configuration in the cookie, and set it to this field."}]})]})}function Zo(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Me,t)})):Me(t)}function er(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function je(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||tr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"GlobalStyle"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { GlobalStyle } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <>
      <GlobalStyle
        sx={{
          '.test-box': {
            bg: 'scene.warning.normal',
            color: 'dark.readable.normal',
            boxSize: 200,
            p: 12,
          },
        }}
      />

      <Center className="test-box">My styles are setted by GlobalStyle</Center>
    </>
  );
}
`})}),`
`,n(e.h3,{children:"Change body styles"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [mounted, setMounted] = useState(false);

  const onClick = () => {
    setMounted(!mounted);
  };

  return (
    <>
      {mounted && (
        <GlobalStyle
          sx={{
            body: {
              bg: 'scene.warning.normal',
            },
          }}
        />
      )}

      <Button onClick={onClick}>Change body background</Button>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"sx",type:"StyleObject"}]})]})}function nr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(je,t)})):je(t)}function tr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Pe(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||rr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Heading"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Heading } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Heading>I'm a Heading</Heading>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<>
  <Heading fontSize="60" noOfLines={1}>
    (60px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="56" noOfLines={1}>
    (56px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="40" noOfLines={1}>
    (40px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="32" noOfLines={1}>
    (32px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="24" noOfLines={1}>
    (24px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="20" noOfLines={1}>
    (20px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="16" noOfLines={1}>
    (16px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="14" noOfLines={1}>
    (14px) In love with React & Next In love with React & Next
  </Heading>
  <Heading fontSize="12" noOfLines={1}>
    (12px) In love with React & Next In love with React & Next
  </Heading>
</>
`})}),`
`,n(e.h2,{children:"Truncate"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Heading noOfLines={[4, 2, 1]}>
  Basic text writing, including headings, body text, lists, and more. Basic text writing, including
  headings, body text, lists, and more. Basic text writing, including headings, body text, lists,
  and more. Basic text writing, including headings, body text, lists, and more. Basic text writing,
  including headings, body text, lists, and more. Basic text writing, including headings, body text,
  lists, and more.
</Heading>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"noOfLines",type:"Responsive<string | number>"}]})]})}function or(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Pe,t)})):Pe(t)}function rr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Ee(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||cr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"Text"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { Text } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Text>I'm a Text</Text>
`})}),`
`,n(e.h2,{children:"Sizes"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<>
  <Text fontSize="60" noOfLines={1}>
    (60px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="56" noOfLines={1}>
    (56px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="40" noOfLines={1}>
    (40px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="32" noOfLines={1}>
    (32px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="24" noOfLines={1}>
    (24px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="20" noOfLines={1}>
    (20px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="16" noOfLines={1}>
    (16px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="14" noOfLines={1}>
    (14px) In love with React & Next In love with React & Next
  </Text>
  <Text fontSize="12" noOfLines={1}>
    (12px) In love with React & Next In love with React & Next
  </Text>
</>
`})}),`
`,n(e.h2,{children:"Truncate"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Text noOfLines={[4, 2, 1]}>
  Basic text writing, including headings, body text, lists, and more. Basic text writing, including
  headings, body text, lists, and more. Basic text writing, including headings, body text, lists,
  and more. Basic text writing, including headings, body text, lists, and more. Basic text writing,
  including headings, body text, lists, and more. Basic text writing, including headings, body text,
  lists, and more.
</Text>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"noOfLines",type:"Responsive<string | number>"}]})]})}function ir(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ee,t)})):Ee(t)}function cr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function De(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||lr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"QAccordion"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import {
  QAccordion,
  QAccordionButton,
  QAccordionItem,
  QAccordionPanel,
  QAccordionIcon,
} from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"uncontrolled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return (
    <QAccordion>
      <QAccordionItem>
        <QAccordionButton>
          Title 1
          <QAccordionIcon />
        </QAccordionButton>
        <QAccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </QAccordionPanel>
      </QAccordionItem>

      <QAccordionItem>
        <QAccordionButton>
          Title 2
          <QAccordionIcon />
        </QAccordionButton>
        <QAccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </QAccordionPanel>
      </QAccordionItem>
    </QAccordion>
  );
}
`})}),`
`,n(e.h3,{children:"controlled mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [activeKey, setActiveKey] = useState(['item2']);

  const onChange = (key) => {
    setActiveKey(key);
  };

  return (
    <QAccordion activeKey={activeKey} onChange={onChange}>
      <QAccordionItem itemKey="item1">
        <QAccordionButton>
          Title 1
          <QAccordionIcon />
        </QAccordionButton>
        <QAccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </QAccordionPanel>
      </QAccordionItem>

      <QAccordionItem itemKey="item2">
        <QAccordionButton>
          Title 2
          <QAccordionIcon />
        </QAccordionButton>
        <QAccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </QAccordionPanel>
      </QAccordionItem>
    </QAccordion>
  );
}
`})}),`
`,n(e.h2,{children:"Customizing icon"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<QAccordion>
  <QAccordionItem>
    {({ isActive }) => {
      return (
        <>
          <QAccordionButton>Title 1 {isActive ? <SunIcon /> : <MoonIcon />}</QAccordionButton>
          <QAccordionPanel>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </QAccordionPanel>
        </>
      );
    }}
  </QAccordionItem>
</QAccordion>
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<QAccordion>
  <QAccordionItem>
    <QAccordionButton>
      Title 1
      <Circle size={32} bg="scene.warning.normal">
        <QAccordionIcon fill="white" />
      </Circle>
    </QAccordionButton>
    <QAccordionPanel>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </QAccordionPanel>
  </QAccordionItem>
</QAccordion>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(e.h3,{children:"QAccordion"}),`
`,n(r,{data:[{name:"activeKey",type:"string[] | number[]",desc:"The keys of expanded accordion items (in controlled mode)."},{name:"defaultActiveKey",type:"string[] | number[]",desc:"The keys of expanded accordion items (in uncontrolled mode)."},{name:"onChange",type:"(key: string[] | number[]) => void"}]}),`
`,n(e.h3,{children:"QAccordionItem"}),`
`,n(r,{data:[{name:"itemKey",type:"string | number",desc:"The key of accordion item",default:"The item's position in accordion item list, e.g. 0, 1, 2, ..."}]})]})}function ar(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(De,t)})):De(t)}function lr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Ne(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||sr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"QDrawer"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import {
  QDrawer,
  QDrawerHeader,
  QDrawerBody,
  QDrawerFooter,
  QDrawerCloseButton,
} from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <QDrawer isOpen={isOpen} onClose={onClose}>
        <QDrawerCloseButton />
        <QDrawerHeader>Title</QDrawerHeader>
        <QDrawerBody>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
          consequat veniam incididunt duis in sint irure nisi.
        </QDrawerBody>
        <QDrawerFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </QDrawerFooter>
      </QDrawer>
    </>
  );
}
`})}),`
`,n(e.h2,{children:"Placement"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  function Component(props) {
    const { placement } = props;

    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
      <>
        <Button onClick={onToggle}>{placement}</Button>

        <QDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
          <QDrawerCloseButton />
          <QDrawerHeader>Title</QDrawerHeader>
          <QDrawerBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
            consequat veniam incididunt duis in sint irure nisi.
          </QDrawerBody>
          <QDrawerFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button>Confirm</Button>
          </QDrawerFooter>
        </QDrawer>
      </>
    );
  }

  return (
    <HStack>
      <Component placement="right" />
      <Component placement="bottom" />
      <Component placement="left" />
      <Component placement="top" />
    </HStack>
  );
}
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isOpen",required:!0,type:"boolean",default:!1},{name:"onClose",required:!0,type:"() => void;"},{name:"closeOnOverlayClick",type:"boolean",default:!0,desc:"Close drawer when click overlay."},{name:"onOverlayClick",type:"() => void;"},{name:"placement",type:"'right' | 'bottom' | 'left' | 'top'",default:"right"},{name:"rootProps",type:"HTMLProps<'div'>",desc:"QDrawer root element's props."},{name:"overlayProps",type:"HTMLProps<'div'>",desc:"QDrawer overlay element's props."}]})]})}function dr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ne,t)})):Ne(t)}function sr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Le(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code",h3:"h3"},t.components),{PropsTable:r}=e;return r||ur("PropsTable",!0),o(i,{children:[n(e.h1,{children:"QListItem"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { QListItem } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box>
  <QListItem>list item 1</QListItem>
  <QListItem>list item 2</QListItem>
  <QListItem>list item 3</QListItem>
</Box>
`})}),`
`,n(e.h2,{children:"Status"}),`
`,n(e.h3,{children:"isDisabled"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box>
  <QListItem isDisabled>list item 1</QListItem>
  <QListItem isDisabled>list item 2</QListItem>
  <QListItem isDisabled>list item 3</QListItem>
</Box>
`})}),`
`,n(e.h2,{children:"Customizing icon"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box>
  <QListItem left={<SkeletonIcon />} right={<Switch defaultChecked />}>
    list item 1
  </QListItem>
  <QListItem left={<SettingIcon />} right={<Checkbox defaultChecked />}>
    list item 2
  </QListItem>
  <QListItem left={<TimeIcon />} right={<SunIcon />}>
    list item 3
  </QListItem>
</Box>
`})}),`
`,n(e.h2,{children:"Props"}),`
`,n(r,{data:[{name:"isDisabled",type:"boolean",default:!1,desc:"If true, the item will be disabled."},{name:"spacing",type:"Responsive<number | string>",desc:"The spacing between content and left or right elements"},{name:"left",type:"React.ReactNode",desc:"If added, the item will show an element before the content."},{name:"right",type:"React.ReactNode",desc:"If added, the item will show an element after the content."}]})]})}function hr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Le,t)})):Le(t)}function ur(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Re(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},t.components),{PropsTable:r}=e;return r||pr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useBreakpointValue"}),`
`,o(e.p,{children:[n(e.code,{children:"useBreakpointValue"})," is a hook used to change any value or style based on the current device."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useBreakpointValue } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.h3,{children:"Normal value as arguments"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Exmaple() {
  const size = useBreakpointValue([40, 80, 160]);

  return (
    <VStack align="flex-start" spacing={24}>
      <Square bg="scene.warning.normal" size={size}></Square>
    </VStack>
  );
}
`})}),`
`,n(e.h3,{children:"Component as arguments"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Exmaple() {
  const component = useBreakpointValue([
    <Square size={40} bg="scene.warning.normal" />,
    <Square size={80} bg="scene.warning.normal" />,
    <Square size={160} bg="scene.warning.normal" />,
  ]);

  return (
    <VStack align="flex-start" spacing={24}>
      {component}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Arguments"}),`
`,n(r,{data:[{name:"responsive array",type:"Array<unknow>",desc:"The responsive array."}]}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"value"})]}),`
`,n(r,{data:[{name:"value",type:"unknow",desc:"The value that corresponded to current device."}]}),`
`,n(e.pre,{children:n(e.code,{})})]})}function mr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Re,t)})):Re(t)}function pr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Oe(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||br("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useOutsideClick"}),`
`,o(e.p,{children:[n(e.code,{children:"useOutsideClick"})," is a custom hook that handles click events outside a specific DOM element."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useOutsideClick } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const ref = React.useRef();
  const [show, setShow] = React.useState(false);

  useOutsideClick({
    ref: ref,
    handler: () => setShow(true),
  });

  return (
    <VStack spacing={24}>
      <Button ref={ref} colorScheme="warning" onClick={() => setShow(false)}>
        {show ? \`Click me to hide the text!\` : \`Click outside to show the text!\`}
      </Button>

      {show && <Box>\u{1F44B} Hey, I'm here!</Box>}
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Arguments"}),`
`,n(r,{data:[{name:"ref",required:!0,type:"RefObject<HTMLElement>",desc:"The reference to a DOM element."},{name:"enabled",type:"boolean",default:!0,desc:"Whether the hook is enabled."},{name:"handler",type:"(e: Event) => void",desc:"Function invoked when a click is triggered outside the referenced element."}]})]})}function gr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Oe,t)})):Oe(t)}function br(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function ze(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||xr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useClipboard"}),`
`,o(e.p,{children:[n(e.code,{children:"useClipboard"})," is a custom hook that handles copying content to clipboard."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useClipboard } from '@chakra-ui/react';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [value, setValue] = React.useState('Hello world');
  const { hasCopied, onCopy } = useClipboard(value);

  return (
    <Flex>
      <Input placeholder="Paste here" />
      <Button onClick={onCopy} ml={8}>
        {hasCopied ? 'Copied' : 'Copy'}
      </Button>
    </Flex>
  );
}
`})}),`
`,n(e.h2,{children:"Arguments"}),`
`,n(r,{data:[{name:"initialValue",type:"string"},{name:"timeout",type:"number",required:!1,default:1500}]}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"object"})]}),`
`,n(r,{data:[{name:"value",type:"string",desc:"The copied value."},{name:"onCopy",type:"function",desc:"Callback function to copy content."},{name:"hasCopied",type:"boolean",default:!1},{name:"setValue",type:"function",desc:"Set the copied value."}]})]})}function fr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(ze,t)})):ze(t)}function xr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Fe(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},t.components),{PropsTable:r}=e;return r||wr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useColorModeValue"}),`
`,o(e.p,{children:[n(e.code,{children:"useColorModeValue"})," is a hook used to change any value or style based on the color mode."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useColorModeValue } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// Here's the signature
const value = useColorModeValue(lightModeValue, darkModeValue);
`})}),`
`,n(e.h3,{children:"Normal value as arguments"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Exmaple() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue('scene.warning.normal', 'scene.success.normal');
  const color = useColorModeValue('white', 'black');

  return (
    <VStack align="flex-start" spacing={24}>
      <Box bg={bg} color={color}>
        This box's styles will change based on the color mode.
      </Box>
      <Button size="md" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </VStack>
  );
}
`})}),`
`,n(e.h3,{children:"Component as arguments"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Exmaple() {
  const { toggleColorMode } = useColorMode();

  const button = useColorModeValue(
    <Square size={50} bg="dark.bg.middle" />,
    <Square size={50} bg="light.bg.middle" />,
  );

  return (
    <VStack align="flex-start" spacing={24}>
      {button}

      <Button size="md" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Arguments"}),`
`,n(r,{data:[{name:"light",type:"unknow",desc:"The value used for light color mode"},{name:"dark",type:"unknow",desc:"The value used for dark color mode"}]}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"value"})]}),`
`,n(r,{data:[{name:"value",type:"unknow",desc:"The value that corresponded to current color mode"}]}),`
`,n(e.pre,{children:n(e.code,{})})]})}function yr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Fe,t)})):Fe(t)}function wr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function _e(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||vr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useColorMode"}),`
`,o(e.p,{children:[n(e.code,{children:"useColorMode"})," is a custom hook used to get the current color mode."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useColorMode } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
  );
}
`})}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"object"})]}),`
`,n(r,{data:[{name:"colorMode",type:"'light' | 'dark'"},{name:"toggleColorMode",type:"(e: Event) => void"}]})]})}function Tr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(_e,t)})):_e(t)}function vr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function Ae(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components),{PropsTable:r}=e;return r||Ir("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useDisclosure"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useDisclosure } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const { isOpen, onToggle, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>show</Button>

      <StateModal
        isOpen={isOpen}
        onClose={onClose}
        title="Successfully"
        description="Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt."
      >
        <Button size="md" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button size="md">Confirm</Button>
      </StateModal>
    </>
  );
}
`})}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"object"})]}),`
`,n(r,{data:[{name:"isOpen",type:"boolean",default:!1},{name:"onToggle",type:"(e: Event) => void"},{name:"onClose",type:"(e: Event) => void"},{name:"onOpen",type:"(e: Event) => void"}]})]})}function Cr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ae,t)})):Ae(t)}function Ir(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function $e(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"useMediaQuery"}),`
`,o(e.p,{children:[n(e.code,{children:"useMediaQuery"}),` is a custom hook used to help detect whether a single media query or multiple media
queries individually match.`]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useMediaQuery } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isMobile, isTablet, isPc] = useMediaQuery([
    '(min-width: 0px) and (max-width: 767px)',
    '(min-width: 768px) and (max-width: 1199px)',
    '(min-width: 1200px)',
  ]);

  return (
    <VStack align="flex-start">
      <Box>isMobile: {isMobile.toString()}</Box>
      <Box>isTablet: {isTablet.toString()}</Box>
      <Box>isPc: {isPc.toString()}</Box>
    </VStack>
  );
}
`})}),`
`,n(e.h2,{children:"Using in ssr"}),`
`,o(e.p,{children:["When used in ssr, it is recommended to add the ",n(e.code,{children:"fallback"})," values."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const [isMobile, isTablet, isPc] = useMediaQuery(
    [
      '(min-width: 0px) and (max-width: 767px)',
      '(min-width: 768px) and (max-width: 1199px)',
      '(min-width: 1200px)',
    ],
    [false, false, true],
  );

  return (
    <VStack align="flex-start">
      <Box>isMobile: {isMobile.toString()}</Box>
      <Box>isTablet: {isTablet.toString()}</Box>
      <Box>isPc: {isPc.toString()}</Box>
    </VStack>
  );
}
`})})]})}function Br(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n($e,t)})):$e(t)}function Ve(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components),{PropsTable:r}=e;return r||kr("PropsTable",!0),o(i,{children:[n(e.h1,{children:"useTheme"}),`
`,o(e.p,{children:[n(e.code,{children:"useTheme"})," is a custom hook used to get the theme configuration object from context."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { useTheme } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`function Example() {
  const theme = useTheme();

  return <Box>{/* Do something with the theme */}</Box>;
}
`})}),`
`,o(e.h2,{children:["Return ",n(e.code,{children:"object"})]}),`
`,n(r,{data:[{name:"object",type:"Theme",desc:"The theme configuration object."}]})]})}function Sr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ve,t)})):Ve(t)}function kr(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}function He(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"isBrowser"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { isBrowser } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  return <Box>{isBrowser ? 'Render in browser' : 'Reader on the server'}</Box>;
}
`})})]})}function Mr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(He,t)})):He(t)}function Xe(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"keyframes"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { keyframes } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const enter = keyframes\`
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  \`;

  return <Square size={100} bg="scene.warning.normal" animation={\`\${enter} 2s infinite\`}></Square>;
}
`})})]})}function jr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Xe,t)})):Xe(t)}function Ge(t){const e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"rgba"}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { rgba } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:'function Example() {\n  const color1 = rgba(`#E6E8EA`, 0.5);\n  const color2 = rgba(`#EEE`, 0.8);\n  const color3 = rgba(128, 128, 128, 0.6);\n  const color4 = rgba(128, 128, 128);\n\n  return (\n    <VStack align="flex-start">\n      <Box>rgba(`#E6E8EA`, 0.5) => `{color1}`</Box>\n      <Box>rgba(`#EEE`, 0.8) => `{color2}`</Box>\n      <Box>rgba(128, 128, 128, 0.6) => `{color3}`</Box>\n      <Box>rgba(128, 128, 128) => `{color4}`</Box>\n    </VStack>\n  );\n}\n'})})]})}function Pr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ge,t)})):Ge(t)}function We(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"styled"}),`
`,o(e.p,{children:[n(e.code,{children:"styled"})," is a function that can be used to enable custom component receive uikit's style props."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { styled } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  // non-uikit component
  function CustomComponent(props) {
    return (
      <div style={{ fontSize: 24 }} {...props}>
        Hi, I'm a non-uikit component.
      </div>
    );
  }

  // convert to uikit component to support uikit's props.
  const NewComponent = styled(CustomComponent);

  return <NewComponent bg="scene.warning.normal" w={400} p={24}></NewComponent>;
}
`})}),`
`,n(e.h2,{children:"BaseStyle"}),`
`,n(e.p,{children:"Attach base styles to the new component."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const NewComponent = styled(Button, {
    baseStyle: {
      bg: 'orange',
      w: 400,
      h: 100,
    },
  });

  return <NewComponent>New Button</NewComponent>;
}
`})})]})}function Er(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(We,t)})):We(t)}function Qe(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"styled"}),`
`,o(e.p,{children:[n(e.code,{children:"styled"})," is a function that can be used to enable custom component receive uikit's style props."]}),`
`,n(e.h2,{children:"Import"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`import { styled } from '@totejs/uikit';
`})}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  // non-uikit component
  function CustomComponent(props) {
    return (
      <div style={{ fontSize: 24 }} {...props}>
        Hi, I'm a non-uikit component.
      </div>
    );
  }

  // convert to uikit component to support uikit's props.
  const NewComponent = styled(CustomComponent);

  return <NewComponent bg="scene.warning.normal" w={400} p={24}></NewComponent>;
}
`})}),`
`,n(e.h2,{children:"BaseStyle"}),`
`,n(e.p,{children:"Attach base styles to the new component."}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Example() {
  const NewComponent = styled(Button, {
    baseStyle: {
      bg: 'orange',
      w: 400,
      h: 100,
    },
  });

  return <NewComponent>New Button</NewComponent>;
}
`})})]})}function Dr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Qe,t)})):Qe(t)}function qe(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre",a:"a"},t.components);return o(i,{children:[n(e.h1,{children:"Global styles"}),`
`,n(e.p,{children:"There are two ways to set the global styles:"}),`
`,o(e.h2,{children:["1. Setting in the ",n(e.code,{children:"theme.ts"})]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`export const theme: Theme = {
  // ...
  // --- global styles ---
  styles: {
    global: {
      body: {
        fontSize: 'b2',
        bg: 'bg.bottom',
        color: 'readable.normal',
      },
      h1: {
        fontSize: 72,
        lineHeight: 1.4,
      },
      '.ui-modal': {
        w: [100, 200, 400],
        h: 400,
      },
    },
  },

  // ...
};
`})}),`
`,o(e.h2,{children:["2. Using ",n(e.code,{children:"GlobalStyle"})," component"]}),`
`,o(e.p,{children:["For more details about ",n(e.code,{children:"GlobalStyle"}),", please click ",n(e.a,{href:"#/docs/components/theme/GlobalStyle",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`<GlobalStyle
  sx={{
    body: {
      fontSize: 'b2',
      bg: 'bg.bottom',
      color: 'readable.normal',
    },
    h1: {
      fontSize: 72,
      lineHeight: 1.4,
    },
    '.ui-modal': {
      w: [100, 200, 400],
      h: 400,
    },
  }}
/>
`})})]})}function Nr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(qe,t)})):qe(t)}function Ue(t){const e=Object.assign({h1:"h1",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"Style props"}),`
`,n(e.h2,{children:"Margin and padding"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"m"}),", ",n(e.code,{children:"margin"})]}),n(e.td,{children:n(e.code,{children:"margin"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"mt"}),", ",n(e.code,{children:"marginTop"})]}),n(e.td,{children:n(e.code,{children:"margin-top"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"mr"}),", ",n(e.code,{children:"marginRight"})]}),n(e.td,{children:n(e.code,{children:"margin-right"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"mb"}),", ",n(e.code,{children:"marginBottom"})]}),n(e.td,{children:n(e.code,{children:"margin-bottom"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"ml"}),", ",n(e.code,{children:"marginLeft"})]}),n(e.td,{children:n(e.code,{children:"margin-left"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"mx"}),", ",n(e.code,{children:"marginX"})]}),o(e.td,{children:[n(e.code,{children:"margin-left"})," + ",n(e.code,{children:"margin-right"})]})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"my"}),", ",n(e.code,{children:"marginY"})]}),o(e.td,{children:[n(e.code,{children:"margin-top"})," + ",n(e.code,{children:"margin-bottom"})]})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"p"}),", ",n(e.code,{children:"padding"})]}),n(e.td,{children:n(e.code,{children:"padding"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"pt"}),", ",n(e.code,{children:"paddingTop"})]}),n(e.td,{children:n(e.code,{children:"padding-top"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"pr"}),", ",n(e.code,{children:"paddingRight"})]}),n(e.td,{children:n(e.code,{children:"padding-right"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"pb"}),", ",n(e.code,{children:"paddingBottom"})]}),n(e.td,{children:n(e.code,{children:"padding-bottom"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"pl"}),", ",n(e.code,{children:"paddingLeft"})]}),n(e.td,{children:n(e.code,{children:"padding-left"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"px"}),", ",n(e.code,{children:"paddingX"})]}),o(e.td,{children:[n(e.code,{children:"padding-left"})," + ",n(e.code,{children:"padding-right"})]})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"py"}),", ",n(e.code,{children:"paddingY"})]}),o(e.td,{children:[n(e.code,{children:"padding-top"})," + ",n(e.code,{children:"padding-bottom"})]})]})]})]}),`
`,n(e.h2,{children:"Background"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bg"}),", ",n(e.code,{children:"background"})]}),n(e.td,{children:n(e.code,{children:"background"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgColor"}),", ",n(e.code,{children:"backgroundColor"})]}),n(e.td,{children:n(e.code,{children:"background-color"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgClip"}),", ",n(e.code,{children:"backgroundClip"})]}),n(e.td,{children:n(e.code,{children:"background-clip"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgSize"}),", ",n(e.code,{children:"backgroundSize"})]}),n(e.td,{children:n(e.code,{children:"background-size"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgPos"}),", ",n(e.code,{children:"bgPosition"}),", ",n(e.code,{children:"backgroundPosition"})]}),n(e.td,{children:n(e.code,{children:"background-position"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgImg"}),", ",n(e.code,{children:"bgImage"}),", ",n(e.code,{children:"backgroundImage"})]}),n(e.td,{children:n(e.code,{children:"background-image"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgRepeat"}),", ",n(e.code,{children:"backgroundRepeat"})]}),n(e.td,{children:n(e.code,{children:"background-repeat"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgAttachment"}),", ",n(e.code,{children:"backgroundAttachment"})]}),n(e.td,{children:n(e.code,{children:"background-attachment"})})]})]})]}),`
`,n(e.h2,{children:"Border and BorderRadius"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"border"})}),n(e.td,{children:n(e.code,{children:"border"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderWidth"})}),n(e.td,{children:n(e.code,{children:"border-width"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderStyle"})}),n(e.td,{children:n(e.code,{children:"border-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderColor"})}),n(e.td,{children:n(e.code,{children:"border-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTop"})}),n(e.td,{children:n(e.code,{children:"border-top"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopWidth"})}),n(e.td,{children:n(e.code,{children:"border-top-width"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopStyle"})}),n(e.td,{children:n(e.code,{children:"border-top-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopColor"})}),n(e.td,{children:n(e.code,{children:"border-top-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottom"})}),n(e.td,{children:n(e.code,{children:"border-bottom"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomWidth"})}),n(e.td,{children:n(e.code,{children:"border-bottom-width"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomStyle"})}),n(e.td,{children:n(e.code,{children:"border-bottom-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomColor"})}),n(e.td,{children:n(e.code,{children:"border-bottom-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderLeft"})}),n(e.td,{children:n(e.code,{children:"border-left"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderLeftWidth"})}),n(e.td,{children:n(e.code,{children:"border-left-width"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderLeftStyle"})}),n(e.td,{children:n(e.code,{children:"border-left-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderLeftColor"})}),n(e.td,{children:n(e.code,{children:"border-left-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRight"})}),n(e.td,{children:n(e.code,{children:"border-right"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRightWidth"})}),n(e.td,{children:n(e.code,{children:"border-right-width"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRightStyle"})}),n(e.td,{children:n(e.code,{children:"border-right-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRightColor"})}),n(e.td,{children:n(e.code,{children:"border-right-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderX"})}),o(e.td,{children:[n(e.code,{children:"border-left"})," + ",n(e.code,{children:"border-right"})]})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderY"})}),o(e.td,{children:[n(e.code,{children:"border-top"})," + ",n(e.code,{children:"border-bottom"})]})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRadius"})}),n(e.td,{children:n(e.code,{children:"border-radius"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopLeftRadius"})}),n(e.td,{children:n(e.code,{children:"border-top-left-radius"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopRightRadius"})}),n(e.td,{children:n(e.code,{children:"border-top-right-radius"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomRightRadius"})}),n(e.td,{children:n(e.code,{children:"border-botom-right-raius"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomLeftRadius"})}),n(e.td,{children:n(e.code,{children:"border-bottom-left-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderTopRaidus"})}),o(e.td,{children:[n(e.code,{children:"border-top-left-radius"})," + ",n(e.code,{children:"border-top-right-radius"})]})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderRightRaidus"})}),o(e.td,{children:[n(e.code,{children:"border-top-right-radius"})," + ",n(e.code,{children:"border-botom-right-raius"})]})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderBottomRaidus"})}),o(e.td,{children:[n(e.code,{children:"border-botom-right-raius"})," + ",n(e.code,{children:"border-bottom-left-color"})]})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"borderLeftRaidus"})}),o(e.td,{children:[n(e.code,{children:"border-top-left-radius"})," + ",n(e.code,{children:"border-bottom-left-color"})]})]})]})]}),`
`,n(e.h2,{children:"Color"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"color"})}),n(e.td,{children:n(e.code,{children:"color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"fill"})}),n(e.td,{children:n(e.code,{children:"fill"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"stroke"})}),n(e.td,{children:n(e.code,{children:"stroke"})})]})]})]}),`
`,n(e.h2,{children:"Effect"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"shadow"}),", ",n(e.code,{children:"boxShadow"})]}),n(e.td,{children:n(e.code,{children:"box-shadow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"mixBlendMode"})}),n(e.td,{children:n(e.code,{children:"mix-blend-mode"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"bgBlendMode"}),", ",n(e.code,{children:"backgroundBlendMode"})]}),n(e.td,{children:n(e.code,{children:"background-blend-mode"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"opacity"})}),n(e.td,{children:n(e.code,{children:"opacity"})})]})]})]}),`
`,n(e.h2,{children:"Filter"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"filter"})}),n(e.td,{children:n(e.code,{children:"filter"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"backdropFilter"})}),n(e.td,{children:n(e.code,{children:"backdrop-filter"})})]})]})]}),`
`,n(e.h2,{children:"Flexbox"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gap"})}),n(e.td,{children:n(e.code,{children:"gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"rowGap"})}),n(e.td,{children:n(e.code,{children:"row-gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"columnGap"})}),n(e.td,{children:n(e.code,{children:"column-gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexBasis"})}),n(e.td,{children:n(e.code,{children:"flex-basis"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"alignItems"})}),n(e.td,{children:n(e.code,{children:"align-items"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"alignContent"})}),n(e.td,{children:n(e.code,{children:"align-content"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"justifyItems"})}),n(e.td,{children:n(e.code,{children:"justify-items"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"justifyContent"})}),n(e.td,{children:n(e.code,{children:"justify-content"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexWrap"})}),n(e.td,{children:n(e.code,{children:"flex-direction"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexDirection"})}),n(e.td,{children:n(e.code,{children:"backdrop-filter"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flex"})}),n(e.td,{children:n(e.code,{children:"flex"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexFlow"})}),n(e.td,{children:n(e.code,{children:"flex-flow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexGrow"})}),n(e.td,{children:n(e.code,{children:"flex-grow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"flexShrink"})}),n(e.td,{children:n(e.code,{children:"flex-shrink"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"justifySelf"})}),n(e.td,{children:n(e.code,{children:"justify-self"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"alignSelf"})}),n(e.td,{children:n(e.code,{children:"align-self"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"order"})}),n(e.td,{children:n(e.code,{children:"order"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"placeItems"})}),n(e.td,{children:n(e.code,{children:"place-ttems"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"placeContent"})}),n(e.td,{children:n(e.code,{children:"place-content"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"placeSelf"})}),n(e.td,{children:n(e.code,{children:"place-self"})})]})]})]}),`
`,n(e.h2,{children:"Grid"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridGap"})}),n(e.td,{children:n(e.code,{children:"grid-gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridRowGap"})}),n(e.td,{children:n(e.code,{children:"gridRow-gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridColumnGap"})}),n(e.td,{children:n(e.code,{children:"gridColumn-gap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridColumn"})}),n(e.td,{children:n(e.code,{children:"grid-column"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridRow"})}),n(e.td,{children:n(e.code,{children:"grid-row"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridAutoFlow"})}),n(e.td,{children:n(e.code,{children:"grid-auto-glow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridAutoColumns"})}),n(e.td,{children:n(e.code,{children:"grid-auto-columns"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridColumnStart"})}),n(e.td,{children:n(e.code,{children:"grid-column-start"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridColumnEnd"})}),n(e.td,{children:n(e.code,{children:"grid-column-end"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridRowStart"})}),n(e.td,{children:n(e.code,{children:"grid-row-start"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridRowEnd"})}),n(e.td,{children:n(e.code,{children:"grid-row-end"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridAutoRows"})}),n(e.td,{children:n(e.code,{children:"grid-auto-rows"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridTemplate"})}),n(e.td,{children:n(e.code,{children:"grid-template"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridTemplateColumns"})}),n(e.td,{children:n(e.code,{children:"grid-template-columns"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridTemplateRows"})}),n(e.td,{children:n(e.code,{children:"grid-template-rows"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridTemplateAreas"})}),n(e.td,{children:n(e.code,{children:"grid-template-areas"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"gridArea"})}),n(e.td,{children:n(e.code,{children:"grid-area"})})]})]})]}),`
`,n(e.h2,{children:"Interactivity"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"appearance"})}),n(e.td,{children:n(e.code,{children:"appearance"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"cursor"})}),n(e.td,{children:n(e.code,{children:"cursor"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"resize"})}),n(e.td,{children:n(e.code,{children:"resize"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"userSelect"})}),n(e.td,{children:n(e.code,{children:"user-select"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"pointerEvents"})}),n(e.td,{children:n(e.code,{children:"pointer-events"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"outline"})}),n(e.td,{children:n(e.code,{children:"outline"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"outlineOffset"})}),n(e.td,{children:n(e.code,{children:"outline-offset"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"outlineColor"})}),n(e.td,{children:n(e.code,{children:"outline-color"})})]})]})]}),`
`,n(e.h2,{children:"Layout"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"w"}),", ",n(e.code,{children:"width"})]}),n(e.td,{children:n(e.code,{children:"width"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"h"}),", ",n(e.code,{children:"height"})]}),n(e.td,{children:n(e.code,{children:"height"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"minW"}),", ",n(e.code,{children:"minWidth"})]}),n(e.td,{children:n(e.code,{children:"min-width"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"maxW"}),", ",n(e.code,{children:"maxWidth"})]}),n(e.td,{children:n(e.code,{children:"max-width"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"minH"}),", ",n(e.code,{children:"minHeight"})]}),n(e.td,{children:n(e.code,{children:"min-height"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"maxH"}),",",n(e.code,{children:"maxHeight"})]}),n(e.td,{children:n(e.code,{children:"max-height"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"boxSize"})}),n(e.td,{children:n(e.code,{children:"color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"display"})}),n(e.td,{children:n(e.code,{children:"display"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"verticalAlign"})}),n(e.td,{children:n(e.code,{children:"vertical-align"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overflow"})}),n(e.td,{children:n(e.code,{children:"overflow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overflowX"})}),n(e.td,{children:n(e.code,{children:"overflow-x"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overflowY"})}),n(e.td,{children:n(e.code,{children:"overflow-y"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"boxSizing"})}),n(e.td,{children:n(e.code,{children:"box-sizing"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"float"})}),n(e.td,{children:n(e.code,{children:"float"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"objectFit"})}),n(e.td,{children:n(e.code,{children:"object-fit"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"objectPos"}),", ",n(e.code,{children:"objectPosition"})]}),n(e.td,{children:n(e.code,{children:"object-position"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"visibility"})}),n(e.td,{children:n(e.code,{children:"visibility"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overscrollBehavior"})}),n(e.td,{children:n(e.code,{children:"overscroll-behavior"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overscrollBehaviorX"})}),n(e.td,{children:n(e.code,{children:"overscroll-behavior-x"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overscrollBehaviorY"})}),n(e.td,{children:n(e.code,{children:"overscroll-behavior-y"})})]})]})]}),`
`,n(e.h2,{children:"List"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"listStyleType"})}),n(e.td,{children:n(e.code,{children:"list-style-type"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"listStylePos"}),", ",n(e.code,{children:"listStylePosition"})]}),n(e.td,{children:n(e.code,{children:"list-style-position"})})]}),o(e.tr,{children:[o(e.td,{children:[n(e.code,{children:"listStyleImg"}),", ",n(e.code,{children:"listStyleImage"})]}),n(e.td,{children:n(e.code,{children:"list-style-image"})})]})]})]}),`
`,n(e.h2,{children:"Position"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"position"})}),n(e.td,{children:n(e.code,{children:"position"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"zIndex"})}),n(e.td,{children:n(e.code,{children:"z-index"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"top"})}),n(e.td,{children:n(e.code,{children:"top"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"right"})}),n(e.td,{children:n(e.code,{children:"right"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"bottom"})}),n(e.td,{children:n(e.code,{children:"bottom"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"left"})}),n(e.td,{children:n(e.code,{children:"left"})})]})]})]}),`
`,n(e.h2,{children:"Scroll"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollBehavior"})}),n(e.td,{children:n(e.code,{children:"scroll-behavior"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollSnapAlign"})}),n(e.td,{children:n(e.code,{children:"scroll-snap-align"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollSnapStop"})}),n(e.td,{children:n(e.code,{children:"scroll-snap-stop"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollSnapType"})}),n(e.td,{children:n(e.code,{children:"scroll-snap-yype"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMargin"})}),n(e.td,{children:n(e.code,{children:"scroll-margin"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMarginTop"})}),n(e.td,{children:n(e.code,{children:"scroll-margin-top"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMarginBottom"})}),n(e.td,{children:n(e.code,{children:"scroll-margin-bottom"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMarginRight"})}),n(e.td,{children:n(e.code,{children:"scroll-margin-right"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMarginX"})}),n(e.td,{children:n(e.code,{children:"scroll-margin-x"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollMarginY"})}),n(e.td,{children:n(e.code,{children:"scroll-margin-y"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPadding"})}),n(e.td,{children:n(e.code,{children:"scroll-padding"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingTop"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-top"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingBottom"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-bottom"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingLeft"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-left"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingRight"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-right"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingX"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-x"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"scrollPaddingY"})}),n(e.td,{children:n(e.code,{children:"scroll-padding-y"})})]})]})]}),`
`,n(e.h2,{children:"TextDecoration"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textShadow"})}),n(e.td,{children:n(e.code,{children:"text-shadow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecorationColor"})}),n(e.td,{children:n(e.code,{children:"text-decoration-color"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecoration"})}),n(e.td,{children:n(e.code,{children:"text-decoration"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecorationLine"})}),n(e.td,{children:n(e.code,{children:"text-decoration-line"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecorationStyle"})}),n(e.td,{children:n(e.code,{children:"text-decoration-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecorationThickness"})}),n(e.td,{children:n(e.code,{children:"text-decoration-thickness"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textUnderlineOffset"})}),n(e.td,{children:n(e.code,{children:"text-underline-offset"})})]})]})]}),`
`,n(e.h2,{children:"Transform"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"clipPath"})}),n(e.td,{children:n(e.code,{children:"clip-pth"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transform"})}),n(e.td,{children:n(e.code,{children:"transform"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transformOrigin"})}),n(e.td,{children:n(e.code,{children:"transform-origin"})})]})]})]}),`
`,n(e.h2,{children:"Transition"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transition"})}),n(e.td,{children:n(e.code,{children:"transition"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transitionProperty"})}),n(e.td,{children:n(e.code,{children:"transition-property"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transitionDuration"})}),n(e.td,{children:n(e.code,{children:"transition-duration"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transitionTimingFunction"})}),n(e.td,{children:n(e.code,{children:"transition-timing-function"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"transitionDelay"})}),n(e.td,{children:n(e.code,{children:"transition-delay"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animation"})}),n(e.td,{children:n(e.code,{children:"animation"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationDelay"})}),n(e.td,{children:n(e.code,{children:"animation-delay"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationDuration"})}),n(e.td,{children:n(e.code,{children:"animation-duration"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationDirection"})}),n(e.td,{children:n(e.code,{children:"animation-direction"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationFillMode"})}),n(e.td,{children:n(e.code,{children:"animation-fill-mode"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationName"})}),n(e.td,{children:n(e.code,{children:"animation-name"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationIterationCount"})}),n(e.td,{children:n(e.code,{children:"animation-iteration-count"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"animationTimingFunction"})}),n(e.td,{children:n(e.code,{children:"animation-timing-function"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"willChange"})}),n(e.td,{children:n(e.code,{children:"will-change"})})]})]})]}),`
`,n(e.h2,{children:"Typography"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"fontFamily"})}),n(e.td,{children:n(e.code,{children:"font-family"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"fontSize"})}),n(e.td,{children:n(e.code,{children:"font-size"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"fontWeight"})}),n(e.td,{children:n(e.code,{children:"font-weight"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"lineHeight"})}),n(e.td,{children:n(e.code,{children:"line-height"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"letterSpacing"})}),n(e.td,{children:n(e.code,{children:"letter-spacing"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"fontStyle"})}),n(e.td,{children:n(e.code,{children:"font-style"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textAlign"})}),n(e.td,{children:n(e.code,{children:"text-align"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"wordBreak"})}),n(e.td,{children:n(e.code,{children:"word-break"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"overflowWrap"})}),n(e.td,{children:n(e.code,{children:"overflow-wrap"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textOverflow"})}),n(e.td,{children:n(e.code,{children:"text-overflow"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textTransform"})}),n(e.td,{children:n(e.code,{children:"text-transform"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"textDecoration"})}),n(e.td,{children:n(e.code,{children:"text-decoration"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"whiteSpace"})}),n(e.td,{children:n(e.code,{children:"white-space"})})]})]})]}),`
`,n(e.h2,{children:"Pseudo"}),`
`,o(e.table,{children:[n(e.thead,{children:o(e.tr,{children:[n(e.th,{children:"Prop"}),n(e.th,{children:"CSS Property"})]})}),o(e.tbody,{children:[o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_hover"})}),n(e.td,{children:n(e.code,{children:"&:hover"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_active"})}),n(e.td,{children:n(e.code,{children:"&:active"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_focus"})}),n(e.td,{children:n(e.code,{children:"&:focus"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_focusWithin"})}),n(e.td,{children:n(e.code,{children:"&:focus-within"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_focusVisible"})}),n(e.td,{children:n(e.code,{children:"&:focus-visible"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_disabled"})}),n(e.td,{children:n(e.code,{children:"&:disabled, &[disabled], &[data-disabled]"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_readOnly"})}),n(e.td,{children:n(e.code,{children:"&[readonly], &[data-readonly]"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_before"})}),n(e.td,{children:n(e.code,{children:"&::before"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_after"})}),n(e.td,{children:n(e.code,{children:"&::after"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_empty"})}),n(e.td,{children:n(e.code,{children:"&:empty"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_autofill"})}),n(e.td,{children:n(e.code,{children:"&:-webkit-autofill"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_even"})}),n(e.td,{children:n(e.code,{children:"&:nth-of-type(even)"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_odd"})}),n(e.td,{children:n(e.code,{children:"&:nth-of-type(odd)"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_first"})}),n(e.td,{children:n(e.code,{children:"&:first-of-type"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_last"})}),n(e.td,{children:n(e.code,{children:"&:last-of-type"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_notFirst"})}),n(e.td,{children:n(e.code,{children:"&:not(:first-of-type)"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_notLast"})}),n(e.td,{children:n(e.code,{children:"&:not(:last-of-type)"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_visited"})}),n(e.td,{children:n(e.code,{children:"&:visited"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_indeterminate"})}),n(e.td,{children:n(e.code,{children:"&:indeterminate, &[data-indeterminate]"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_placeholder"})}),n(e.td,{children:n(e.code,{children:"&::placeholder"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_placeholderShown"})}),n(e.td,{children:n(e.code,{children:"&:placeholder-shown"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_fullScreen"})}),n(e.td,{children:n(e.code,{children:"&:fullscreen"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_selection"})}),n(e.td,{children:n(e.code,{children:"&::selection"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_invalid"})}),n(e.td,{children:n(e.code,{children:"&[data-invalid]"})})]}),o(e.tr,{children:[n(e.td,{children:n(e.code,{children:"_checked"})}),n(e.td,{children:n(e.code,{children:"&[data-checked]"})})]})]})]})]})}function Lr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ue,t)})):Ue(t)}function Ke(t){const e=Object.assign({h1:"h1",h3:"h3",pre:"pre",code:"code"},t.components);return o(i,{children:[n(e.h1,{children:"Theme"}),`
`,n(e.h3,{children:"Default theme configuration"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/index.ts
export const theme: Theme = {
  // --- breakpoints ---
  breakpoints: {
    md: '768px',
    lg: '1200px',
  },

  // --- app config ---
  config: {
    // if true, will ignore \`initialColorMode\` and user settings, app will always follow the system's color mode.
    useSystemColorMode: false,

    // color mode behavior when user first enters the app, optional values: \`system\` | \`light\` | \`dark\`
    initialColorMode: 'system',

    // color mode storage key, use different keys for different apps, e.g. \`nodereal-ui-color-mode\`
    storageKey: '{app-name}-color-mode',

    // ssr must be \`cookie\`,  optional values: \`cookie\` | \`localStorage\`
    storageType: 'cookie',

    // prefix of component\u2019s class name and theme's css vars, e.g. \`ui-button\`, \`--ui-colors-readable-normal\`
    cssVarPrefix: 'ui',

    // If you want to share the color mode configuration in subdomains, you can set a parent domain.
    // e.g. setting: \`fe.nodereal.cc\`, \`mainnet.fe.nodereal.cc\` and \`testnet.fe.nodereal.cc\` will share the color mode configuration.
    cookieDomain: undefined,

    // Prevent components' transations when changing color mode.
    preventTransition: true,
  },

  // --- global styles ---
  styles: {
    global: {
      body: {
        fontSize: 'b2',
        bg: 'bg.bottom',
        color: 'readable.normal',
      },
    },
  },

  ...colors,
};
`})}),`
`,n(e.h3,{children:"Color configuration used in dark mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/colors/dark.ts
import { rgba } from '@totejs/styled-system';

export const dark = {
  colors: {
    readable: {
      normal: '#E6E8EA',
      secondary: '#76808F',
      disabled: '#5E6673',
      border: '#2E323A',
      white: '#FFFFFF',
      top: {
        secondary: '#929AA5',
      },
    },

    bg: {
      bottom: '#14151A',
      middle: '#1E2026',
      codebox: '#262D37',
      top: {
        normal: '#2B2F36',
        active: '#2E323A',
      },
    },

    scene: {
      primary: {
        normal: '#9B00FB',
        active: '#CD7CFF',
        opacity: rgba('#B845FF', 0.1),
      },

      success: {
        normal: '#02C076',
        active: '#48FFB8',
        opacity: rgba('#2ED191', 0.1),
      },

      danger: {
        normal: '#D9304E',
        active: '#FF898F',
        opacity: rgba('#FC6E75', 0.1),
      },

      warning: {
        normal: '#EB9E09',
        active: '#FFCE58',
        opacity: rgba('#F5B631', 0.1),
      },
    },
  },

  shadows: {},
};
`})}),`
`,n(e.h3,{children:"Color configuration used in light mode"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/colors/light.ts
import { rgba } from '@totejs/styled-system';

export const light = {
  colors: {
    readable: {
      normal: '#1E2026',
      secondary: '#76808F',
      disabled: '#AEB4BC',
      border: '#E6E8EA',
      white: '#FFFFFF',
      top: {
        secondary: '#474D57',
      },
    },

    bg: {
      bottom: '#F5F5F5',
      middle: '#FFFFFF',
      codebox: '#F0F4F9',
      top: {
        normal: '#F5F5F5',
        active: '#E6E8EA',
      },
    },

    scene: {
      primary: {
        normal: '#9B00FB',
        active: '#B845FF',
        opacity: rgba('#B845FF', 0.1),
      },

      success: {
        normal: '#02C076',
        active: '#2ED191',
        opacity: rgba('#2ED191', 0.1),
      },

      danger: {
        normal: '#D9304E',
        active: '#FC6E75',
        opacity: rgba('#FC6E75', 0.1),
      },

      warning: {
        normal: '#EB9E09',
        active: '#F5B631',
        opacity: rgba('#F5B631', 0.1),
      },
    },
  },

  shadows: {},
};
`})})]})}function Rr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ke,t)})):Ke(t)}function Ye(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre",a:"a"},t.components);return o(i,{children:[n(e.h1,{children:"Responsive styles"}),`
`,o(e.p,{children:["Responsive syntax relies on the ",n(e.code,{children:"breakpoints"})," defined in the theme object."]}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/index.tsx

export const theme: Theme = {
  // --- default breakpoints ---
  breakpoints: {
    md: '768px',
    lg: '1200px',
  },

  // customizing breakpoints
  // breakpoints: {
  //   sm: '375px',
  //   md: '768px',
  //   lg: '1200px',
  //   xl: '1900px',
  // },
};
`})}),`
`,n(e.h2,{children:"The Array syntax"}),`
`,o(e.p,{children:["All ",n(e.code,{children:"style props"})," accept ",n(e.code,{children:"arrays"})," as values for mobile-first ",n(e.code,{children:"responsive styles"}),`. Changing the size
of the browser window to see the effect.`]}),`
`,o(e.p,{children:["To skip certain breakpoints, you can pass ",n(e.code,{children:"null"}),` to any position in the array to avoid generating
unnecessary CSS.`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<VStack align="flex-start">
  <Button size={['sm', 'md', 'lg']}>button</Button>
  <Box
    p={48} // all devices will apply 48
    w={[null, 400, 600]} // mobile will apply default
    h={[100, null, 300]} // tablet will automatically apply 100
    fontSize={[14, 16]} // pc will automatically apply 16
    borderRadius={[8, 12, null]} // pc will automatically apply 12
    bg={['scene.danger.normal', 'scene.warning.normal', 'scene.success.normal']}
  >
    Some Text
  </Box>
</VStack>
`})}),`
`,n(e.h2,{children:"useBreakpointValue"}),`
`,o(e.p,{children:[`In some scenarios, if the props of some components are not responsive, then we can also use the hook
`,n(e.code,{children:"useBreakpoint"}),` to add responsive functionality to it. For more details, please click
`,n(e.a,{href:"#/docs/hooks/useBreakpointValue",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`function Exmaple() {
  const size = useBreakpointValue([40, 80, 160]);

  return (
    <VStack align="flex-start" spacing={24}>
      <Square bg="scene.warning.normal" size={size}></Square>
    </VStack>
  );
}
`})})]})}function Or(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ye,t)})):Ye(t)}function Je(t){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",pre:"pre"},t.components);return o(i,{children:[n(e.h1,{children:"The sx prop"}),`
`,o(e.p,{children:["With ",n(e.code,{children:"sx"})," you can provide any valid CSS to an element."]}),`
`,n(e.h2,{children:"Usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Box
  sx={{
    // Change self styles
    display: 'flex',
    flexDirection: 'column',

    // Change children styles
    '.ui-button': {
      maxW: 120,
      bg: 'red',
      color: 'black',
      _hover: {
        bg: 'yellow',
      },
    },

    // Creating nested selectors
    '>div': {
      mt: 12,
      bg: 'scene.warning.normal',
      p: {
        fontSize: 24,
      },
    },
  }}
>
  <Button>button</Button>
  <Box w={200} h={100}>
    I'm a box
    <Text>some text</Text>
  </Box>
</Box>
`})})]})}function zr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Je,t)})):Je(t)}function Ze(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",a:"a",ul:"ul",li:"li",h3:"h3"},t.components);return o(i,{children:[n(e.h1,{children:"Getting Started"}),`
`,n(e.h2,{children:"Installation"}),`
`,n(e.p,{children:"In your project, install UI kit by running the following command:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`npm i @totejs/uikit @emotion/react@^11 @emotion/styled@^11
`})}),`
`,n(e.p,{children:"To use icons, just run:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-bash",children:`npm i @totejs/icons
`})}),`
`,o(e.p,{children:["All icons are ",n(e.a,{href:"#/docs/components/media-icons/Icon",children:"here"}),"."]}),`
`,n(e.h2,{children:"Examples"}),`
`,o(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://github.com/node-real/tote/tree/v2/examples/uikit-next",children:"next.js demo"})}),`
`]}),`
`,n(e.h2,{children:"How to use in Next.js"}),`
`,o(e.h3,{children:["1. Add ",n(e.code,{children:"theme"})]}),`
`,o(e.p,{children:["To see all available configuration options, please click ",n(e.a,{href:"#/docs/styled-system/theme",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/index.ts
import { Theme } from '@totejs/uikit';
import { colors } from './colors';

export const theme: Theme = {
  // --- app config ---
  config: {
    // if true, will ignore \`initialColorMode\` and user settings, app will always follow the system's color mode.
    useSystemColorMode: false,

    // color mode behavior when user first enters the app, optional values: \`system\` | \`light\` | \`dark\`
    initialColorMode: 'system',

    // color mode storage key, use different keys for different apps, e.g. \`nodereal-ui-color-mode\`
    storageKey: '{app-name}-color-mode',
  },

  // --- global styles ---
  styles: {
    global: {
      body: {
        fontSize: 'b2',
        bg: 'bg.bottom',
        color: 'readable.normal',
      },
    },
  },

  ...colors,
};
`})}),`
`,o(e.h3,{children:["2. Update ",n(e.code,{children:"primary color"})," in ",n(e.code,{children:"dark.ts"})," and ",n(e.code,{children:"light.ts"})," if necessary"]}),`
`,o(e.p,{children:["In general, the ",n(e.code,{children:"primary color"})," is different for each app."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/colors/dark.ts
import { rgba } from '@totejs/uikit';

export const dark = {
  colors: {
    // ...
    scene: {
      // \u{1F447} Here's the primary color in dark mode
      primary: {
        normal: '#9B00FB',
        active: '#CD7CFF',
        opacity: rgba('#B845FF', 0.1),
      },
    // ...
  },
};
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// theme/colors/light.ts
import { rgba } from '@totejs/uikit';

export const light = {
  colors: {
    // ...
    scene: {
      // \u{1F447} Here's the primary color in light mode
      primary: {
        normal: '#9B00FB',
        active: '#B845FF',
        opacity: rgba('#B845FF', 0.1),
      },
    // ...
  },
};
`})}),`
`,o(e.h3,{children:["3. Add ",n(e.code,{children:"ColorModeScript"})," to ",n(e.code,{children:"_document.tsx"})]}),`
`,o(e.p,{children:["For more details about ",n(e.code,{children:"ColorModeScript"}),`, please click
`,n(e.a,{href:"#/docs/components/theme/ColorModeScript",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// pages/_document.tsx
import { ColorModeScript } from '@totejs/uikit';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { theme } from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* \u{1F447} Here's the script */}
          <ColorModeScript {...theme.config} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
`})}),`
`,o(e.h3,{children:["4. Add ",n(e.code,{children:"ThemeProvider"})," to ",n(e.code,{children:"_app.tsx"})]}),`
`,o(e.p,{children:["For more details about ",n(e.code,{children:"ThemeProvider"}),", please click ",n(e.a,{href:"#/docs/components/theme/ThemeProvider",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// pages/_app.tsx
import { ThemeProvider } from '@totejs/uikit';
import type { AppProps } from 'next/app';
import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    {/* \u{1F447} Here's the theme provider */}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
`})}),`
`,o(e.h3,{children:["5. How to use ",n(e.code,{children:"theme colors"})]}),`
`,o(e.p,{children:["You can access ",n(e.code,{children:"theme colors"})," by object path, e.g. ",n(e.code,{children:"readable.normal"}),", the ",n(e.code,{children:"theme colors"}),` will
automatically follow the `,n(e.code,{children:"color mode"})," configuration, or you can add ",n(e.code,{children:"light"})," or ",n(e.code,{children:"dark"}),` prefix to use
fixed colors.`]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`export const light = {
  colors: {
    readable: {
      normal: '#1E2026', // readable.normal
      secondary: '#76808F', // readable.secondary
      // ...
    },

    bg: {
      // ...
      top: {
        normal: '#F5F5F5', // bg.top.normal
        active: '#E6E8EA', // bg.top.active
      },
    },

    scene: {
      primary: {
        normal: '#9B00FB', // scene.primary.normal
        active: '#B845FF', // scene.primary.active
        opacity: rgba('#B845FF', 0.1), // scene.primary.opacity
      },
      // ...
    },
  },
};
`})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// pages/index.tsx
import type { NextPage } from 'next';
import { Center } from '@totejs/uikit';

import { SwitchColorMode } from '../components/SwitchColorMode';

const Home: NextPage = () => {
  return (
    // ...
    <Center w="100%" h={60} bg="bg.middle" borderBottom="1px solid readable.border">
      <SwitchColorMode />
    </Center>

    <HStack>
      {/* no prefix will automatically follow color mode configuration */}
      <Box boxSize={200} bg="readable.normal"></Box>

      {/* add light or dark prefix to use fixed colors */}
      <Box boxSize={200} bg="dark.readable.normal"></Box>
      <Box boxSize={200} bg="light.readable.normal"></Box>
    </HStack>
    // ...
  );
};

export default Home;
`})}),`
`,o(e.h3,{children:["6. How to use ",n(e.code,{children:"responsive styles"})]}),`
`,o(e.p,{children:["For more details about ",n(e.code,{children:"responsive styles"}),`, please click
`,n(e.a,{href:"#/docs/styled-system/responsive-styles",children:"here"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",live:"false",children:`// pages/index.tsx
import type { NextPage } from 'next';
import { Center } from '@totejs/uikit';

import { SwitchColorMode } from '../components/SwitchColorMode';

const Home: NextPage = () => {
  return (
    // ...
    <Button size={['sm', 'md', 'lg']}>Click Me</Button>

    <Box
      p={48} // all devices will apply 48
      w={[null, 400, 600]} // mobile will apply default
      h={[100, null, 300]} // tablet will automatically apply 100
      fontSize={[14, 16]} // pc will automatically apply 16
      borderRadius={[8, 12, null]} // pc will automatically apply 12
      bg={['scene.danger.normal', 'scene.warning.normal', 'scene.success.normal']}
    >
      Some Text
    </Box>
    // ...
  );
};

export default Home;
`})})]})}function Fr(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(Ze,t)})):Ze(t)}function en(t){const e=Object.assign({h2:"h2"},t.components),{AllIcons:r}=e;return r||Ar("AllIcons",!0),o(i,{children:[n(e.h2,{children:"All icons"}),`
`,n(r,{})]})}function _r(t={}){const{wrapper:e}=t.components||{};return e?n(e,Object.assign({},t,{children:n(en,t)})):en(t)}function Ar(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}const $r=[{label:"Getting Started",path:"/guides",icon:n(_n,{}),element:Fr},{label:"Styled System",path:"/docs/styled-system",icon:n(An,{}),redirect:"/docs/styled-system/theme",children:[{label:"Theme",path:"/theme",element:Rr},{label:"Factory",path:"/factory",element:Dr},{label:"Global Styles",path:"/global-styles",element:Nr},{label:"Style Props",path:"/style-props",element:Lr},{label:"Responsive Styles",path:"/responsive-styles",element:Or},{label:"sx prop",path:"/sx-prop",element:zr}]},{label:"Components",path:"/docs/components",icon:n($n,{}),redirect:"/docs/components/animation/Fade",children:[{label:"Animation",path:"/animation",children:[{label:"Fade",path:"/Fade",element:at},{label:"ScaleFade",path:"/ScaleFade",element:dt},{label:"Slide",path:"/Slide",element:ht},{label:"SlideFade",path:"/SlideFade",element:mt},{label:"Collapse",path:"/Collapse",element:gt}]},{label:"Data Display",path:"/data-display",children:[{label:"Badge",path:"/Badge",element:ft},{label:"Divider",path:"/Divider",element:yt},{label:"Empty",path:"/Empty",element:Tt},{label:"Pagination",path:"/Pagination",element:Ct},{label:"Table",path:"/Table",element:Bt}]},{label:"Disclosure",path:"/disclosure",children:[{label:"Tabs",path:"/Tabs",element:kt}]},{label:"Feedback",path:"/feedback",children:[{label:"Toast",path:"/Toast",element:jt},{label:"Skeleton",path:"/Skeleton",element:Et}]},{label:"Forms",path:"/form",children:[{label:"Button",path:"/Button",element:Nt},{label:"IconButton",path:"/IconButton",element:Rt},{label:"ButtonGroup",path:"/ButtonGroup",element:zt},{label:"CloseButton",path:"/CloseButton",element:_t},{label:"Checkbox",path:"/Checkbox",element:$t},{label:"Radio",path:"/Radio",element:Ht},{label:"RadioGroup",path:"/RadioGroup",element:Gt},{label:"Switch",path:"/Switch",element:Qt},{label:"Input",path:"/Input",element:Ut},{label:"InputGroup",path:"/InputGroup",element:Yt},{label:"InputLeftElement",path:"/InputLeftElement",element:Zt},{label:"InputRightElement",path:"/InputRightElement",element:eo},{label:"Textarea",path:"/Textarea",element:no},{label:"FormControl",path:"/FormControl",element:oo},{label:"FormErrorMessage",path:"/FormErrorMessage",element:io},{label:"FormLabel",path:"/FormLabel",element:co},{label:"FormRequiredIndicator",path:"/FormRequiredIndicator",element:lo}]},{label:"layout",path:"/layout",children:[{label:"AspectRatio",path:"/AspectRatio",element:so},{label:"Box",path:"/Box",element:uo},{label:"Center",path:"/Center",element:mo},{label:"Circle",path:"/Circle",element:po},{label:"Square",path:"/Square",element:bo},{label:"Flex",path:"/Flex",element:xo},{label:"Grid",path:"/Grid",element:wo},{label:"SimpleGrid",path:"/SimpleGrid",element:vo},{label:"Stack",path:"/Stack",element:Io},{label:"HStack",path:"/HStack",element:So},{label:"VStack",path:"/VStack",element:Mo},{label:"Wrap",path:"/Wrap",element:Po}]},{label:"Media & Icons",path:"/media-icons",children:[{label:"Image",path:"/Image",element:Do},{label:"Icon",path:"/Icon",element:Lo}]},{label:"Navigation",path:"/navigation",children:[{label:"Link",path:"/Link",element:Ro}]},{label:"Other",path:"/other",children:[{label:"Portal",path:"/Portal",element:zo}]},{label:"Overlay",path:"/overlay",children:[{label:"Modal",path:"/Modal",element:_o},{label:"StateModal",path:"/StateModal",element:$o},{label:"Tooltip",path:"/Tooltip",element:Ho},{label:"Popover",path:"/Popover",element:Go},{label:"Menu",path:"/Menu",element:Qo}]},{label:"Theme",path:"/theme",children:[{label:"ColorModeScript",path:"/ColorModeScript",element:Uo},{label:"DarkMode",path:"/DarkMode",element:Yo},{label:"LightMode",path:"/LightMode",element:Jo},{label:"ThemeProvider",path:"/ThemeProvider",element:Zo},{label:"GlobalStyle",path:"/GlobalStyle",element:nr}]},{label:"Typography",path:"/typography",children:[{label:"Heading",path:"/Heading",element:or},{label:"Text",path:"/Text",element:ir}]},{label:"Nonstandard",path:"/q",children:[{label:"QAccordion",path:"/QAccordion",element:ar},{label:"QDrawer",path:"/QDrawer",element:dr},{label:"QListItem",path:"/QListItem",element:hr}]}]},{label:"Hooks",path:"/docs/hooks",icon:n(Vn,{}),redirect:"/docs/hooks/useTheme",children:[{label:"useTheme",path:"/useTheme",element:Sr},{label:"useColorMode",path:"/useColorMode",element:Tr},{label:"useColorModeValue",path:"/useColorModeValue",element:yr},{label:"useBreakpointValue",path:"/useBreakpointValue",element:mr},{label:"useClipboard",path:"/useClipboard",element:fr},{label:"useMediaQuery",path:"/useMediaQuery",element:Br},{label:"useOutsideClick",path:"/useOutsideClick",element:gr},{label:"useDisclosure",path:"/useDisclosure",element:Cr}]},{label:"Utils",path:"/docs/utils",icon:n(Hn,{}),redirect:"/docs/utils/isBrowser",children:[{label:"isBrowser",path:"/isBrowser",element:Mr},{label:"keyframes",path:"/keyframes",element:jr},{label:"rgba",path:"/rgba",element:Pr},{label:"styled",path:"/styled",element:Er}]},{label:"All icons",path:"/docs/icons",icon:n(Xn,{}),element:_r}],v=hn($r),Vr=sn(v);function Hr(){var c;const{pathname:t}=C(),e=((c=v.find(a=>t.includes(a.path)))==null?void 0:c.children)||[],r=t.includes("/components"),l={w:220,px:16,pb:68};return o(i,{children:[n(d,{...l,flexShrink:0}),o(d,{position:"fixed",left:0,overflowY:"auto",zIndex:999,h:"100%",...l,bg:"bg.middle",children:[n(u,{h:68,alignItems:"center",children:n(b,{fontSize:"t2",lineHeight:1.2,fontWeight:700,children:"Design System"})}),n(y,{alignItems:"flex-start",mt:8,spacing:0,sx:{a:{w:"100%"}},children:v.map(a=>n(nn,{to:a.path,children:o(u,{h:48,alignItems:"center",cursor:"pointer",fontSize:14,fontWeight:500,borderRadius:8,color:t.includes(a.path)?"scene.primary.active":void 0,w:"100%",px:16,gap:8,children:[a.icon," ",a.label]})},a.path))}),e.length>0&&n(Gn,{my:32}),r?n(Xr,{subMenus:e}):n(un,{subMenus:e})]})]})}function un(t){const{subMenus:e=[],...r}=t,{pathname:l}=C();return n(y,{alignItems:"flex-start",w:"100%",sx:{a:{w:"100%"}},...r,children:e.map(c=>n(nn,{to:c.path,children:n(u,{h:48,alignItems:"center",cursor:"pointer",fontSize:14,fontWeight:500,borderRadius:8,bg:l===c.path?"scene.primary.opacity":void 0,color:l===c.path?"scene.primary.active":void 0,px:16,children:c.label})},c.path))})}function Xr(t){const{subMenus:e=[],...r}=t;return n(y,{alignItems:"flex-start",...r,spacing:32,children:e.map(l=>o(y,{alignItems:"flex-start",w:"100%",children:[n(u,{color:"scene.primary.normal",alignItems:"center",h:48,px:16,fontWeight:500,w:"100%",children:l.label}),n(un,{subMenus:l.children})]},l.path))})}function Gr(){return o(u,{minH:"100vh",children:[n(Hr,{}),o(d,{flex:1,overflowX:"hidden",children:[n(Kn,{}),n(d,{m:32,p:24,bg:"bg.middle",borderRadius:16,children:n(vn,{})})]})]})}function Wr(){return ct(),n(Wn,{theme:an,children:n(Cn,{children:o(w,{path:"/",element:n(Gr,{}),children:[Vr.map((t,e)=>n(w,{path:t.path,element:t.element},e)),n(w,{path:"*",element:null})]})})})}In.createRoot(document.getElementById("root")).render(o(Bn,{children:[n(Qn,{...an.config}),n(Wr,{})]}));
