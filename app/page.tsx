import Link from "next/link";
import { GithubLogo, LinkedInLogo } from "@/app/components/icons/logo";

export default function Page() {
  return (
    <main>
      <h1 className="font-semibold">신지운 ﹒ jiun</h1>
      <br />
      <p>
        경험을 쌓고 배우기 위해 노력합니다.
        <br />
        코딩하고, 산책하고, 책을 읽는 것을 좋아합니다.
      </p>
      <p>
        <br />
        여러 스타트업에서 다양한{" "}
        <Link href="/work" className="font-serif font-semibold link">
          경험
        </Link>
        을 쌓았습니다.
      </p>
      <div className="flex gap-2">
        <Link
          href="https://github.com/jiun-dev"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jiun-shin-a18b89230/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInLogo />
        </Link>
      </div>
    </main>
  );
}
