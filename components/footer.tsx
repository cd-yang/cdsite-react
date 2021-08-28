import * as CSS from 'csstype';

export default function Footer() {
  return (
    <div style={footerStyle}>
      <div><a href="http://www.beian.miit.gov.cn/" rel="noreferrer" target="_blank">沪ICP备20008178号 </a></div>
      <div>
        <span>&copy; 2021</span>
        <span style={{ marginLeft: "1em" }}>CD Yang</span>
      </div>
    </div>
  );
}

const footerStyle: CSS.Properties = {
  background: 'rgb(227,227,227)',
  width: '100%',
  padding: '5px 0px',
  textAlign: 'center',
};
