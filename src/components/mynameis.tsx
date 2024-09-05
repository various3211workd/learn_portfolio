import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faChevronDown } from '@fortawesome/free-solid-svg-icons';



const Hero = () => {
  return (
    <section id="mynameis">
    <div className="flex justify-center items-center flex-col w-full h-screen">
      <Image src='/43775946.png' className="w-52 h-52 rounded-full" width={300} height={300} alt="" />
      <div className="mx-40">
        <div className="mt-8">
          <p className="font-bold text-2xl text-center pb-5">Nextjs/React/Tailwind cssの勉強用のポートフォリオ。</p>
        <div/>
        <p className="text-base mb-2">
          何かのプログラムを作ることやセキュリティが大好きな人間です。
          <br />プログラミングでは、主に自分が困ったこと・ほしいものを解決するために、
          <br />・Webアプリ
          <br />・スマホアプリ
          <br />・CLツール
          <br />などを開発しています。
          <br />
          <br />セキュリティでは、Web, ネットワーク, Android/IOSアプリのセキュリティが好きで日々勉強しています。
          <br />過去の業務では
          <br />・Webアプリケーション診断
          <br />・マルウェア解析
          <br />・セキュリティについての講義
          <br />・デジタルフォレンジック
          <br />の経験があります。他にも自分で作成したスマホアプリを解析するなどして日々を過ごしています。
        </p>
        <div className="flex justify-center flex-row">
          <a
            href="https://todoaaaaaa.hatenablog.com/"
            aria-label="Twitter"
            target="_blank"
            rel="ブログ"
          >
            <FontAwesomeIcon icon={faLink} className="text-4xl"/>
          </a>
          <a
            href="https://github.com/various3211workd"
            aria-label="GitHub"
            target="_blank"
            rel="Github"
          >
            <FontAwesomeIcon icon={faGithub} className="text-4xl"/>
          </a>
      </div>
      </div>
    
    </div>    
    </div>
    </section>
  )
}

export default Hero;
