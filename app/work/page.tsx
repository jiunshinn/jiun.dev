import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">my work</h1>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="mb-1 text-xl font-medium tracking-tighter">
        포들리 파트너스
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        모바일 앱 개발자
      </p>
      <ul>
        <br />
        <p>포들리 파트너스</p>
        <li>
          앱 내에서 찾기 어려운 메인 기능들을 유저가 편하게 이용할수 있도록
          대시보드로 통합시켜서 유저 경험 증가.
        </li>
        <li>인스타그램을 통한 리뷰 공유기능 개발.</li>
      </ul>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="mb-1 text-xl font-medium tracking-tighter">그렉터</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">연구원</p>
      <ul>
        <br />
        <p>성남시청 스마트시티 웹 IOT 솔루션 유지보수</p>
        <li>Mapbox 라이브러리를 활용한 지도기능 개선 및 클러스터링</li>
        <p>금남구청 스마트시티 웹 IOT 솔루션 유지보수</p>
        <li>
          80만개의 데이터를 기반으로 금남구청 지역, 나이, 성별 분류 SQL작성 및
          최적화
        </li>
        <li>데이터 시각화 차트 개발</li>
      </ul>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="mb-1 text-xl font-medium tracking-tighter">
        라이트하우스
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        모바일 앱 개발자
      </p>
      <ul>
        <br />
        <p>오늘케어/데일리북 모바일 앱 전체 개발</p>
        <li>MVC디자인 패턴 도입 및 리팩토링</li>
        <li>
          자주 변경되는 기획과 요구사항에 빠른 대응과 배포를 위해 Fastlane을
          활용한 CI/CD 배포
        </li>
        <li>페이지네이션, 디바운스를 활용한 프론트엔드 성능 최적화</li>
      </ul>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </section>
  );
}
