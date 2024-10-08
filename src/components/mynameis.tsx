import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section id="mynameis">
      <div className="flex justify-center items-center flex-col pt-20">
        <Image
          src="/43775946.png"
          className="w-52 h-52 rounded-full"
          width={300}
          height={300}
          alt=""
        />
        <div className="md:mx-40 mx-10">
          <div className="mt-8">
            <p className="font-bold md:text-2xl text-lg text-center pb-5 underline decoration-[#A04747]">
              Nextjs/React/Tailwind CSSの勉強用のポートフォリオ
            </p>
            <div />
            <p className="text-base mb-2">
              何かのプログラムを作ることやセキュリティが大好きな人間です。
              <br />
              プログラミングでは、主に自分が困ったこと・ほしいものを解決するために、
              <br />
              ・Webアプリ
              <br />
              ・スマホアプリ
              <br />
              ・CLツール
              <br />
              などを開発しています。
              <br />
              <br />
              セキュリティでは、Web, ネットワーク,
              Android/IOSアプリのセキュリティが好きで日々勉強しています。
              <br />
              過去の業務では
              <br />
              ・Webアプリケーション診断
              <br />
              ・マルウェア解析
              <br />
              ・セキュリティについての講義
              <br />
              ・デジタルフォレンジック
              <br />
              の経験があります。他にも自分で作成したスマホアプリを解析するなどして日々を過ごしています。
            </p>
            <div className="flex justify-center flex-row my-10 pb-40">
              <a
                href="https://todoaaaaaa.hatenablog.com/"
                aria-label="Twitter"
                target="_blank"
                rel="ブログ"
                className="pr-5"
              >
                <FontAwesomeIcon
                  icon={faLink}
                  className="text-4xl duration-300 hover:text-[#A04747]"
                />
              </a>
              <a
                href="https://github.com/various3211workd"
                aria-label="GitHub"
                target="_blank"
                rel="Github"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-4xl duration-300 hover:text-[#A04747]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
