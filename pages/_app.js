require("../styles/variables.less");
import "../styles/globals.css";


import '../src/input.css';
import '../styles/vars.scss'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../styles/tailwind.scss'
import 'antd/dist/antd.css'



import { ConfigProvider } from 'antd';
import tr_TR from 'antd/lib/locale/tr_TR';


function MyApp({ Component, pageProps }) {
    return (
      <div className='rootdiv'>
        <div className="m-10 bg-red-100 p-3 flex flex-col">
         <span> Created by Kubilay Bozak</span>
         <span> Github: <a>https://github.com/kubilaybzk/Tailwind-AntDesign-Scss-Project-Structure</a> </span>
         <span> Medium: <a>https://kubilaybozak.medium.com/</a></span>
         <span> Linkedin: <a>https://www.linkedin.com/in/kubilaybozak/</a></span>
        </div>

        <ConfigProvider locale={tr_TR}>
          <Component {...pageProps} />
        </ConfigProvider>
      </div>
    )
  }
  
  export default MyApp;
