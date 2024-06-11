"use client";
import { Divz } from "divz";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-between ">
        <h1 className="text-4xl font-bold text-white text-center mt-10">
          Click on image to visit project!
        </h1>
        <Divz autoPlay={true} autoPlayDuration={4500}>
          <Link
            href={
              "https://laptoshop-front-c613tx505-maleks-projects-4df77c24.vercel.app"
            }
          >
            <div className="flex flex-col items-center justify-between">
              <Image
                src="/1.png"
                alt="project picture"
                fill
              />
              
            </div>
          </Link>
          <Link
            href={
              "https://simple-ecommerce-fe4o-nxaxjl7xe-maleks-projects-4df77c24.vercel.app"
            }
          >
            <Image src="/2.png" alt="project picture" fill />
          </Link>
          <Link
            href={
              "https://filtering-6lvqeyvjn-maleks-projects-4df77c24.vercel.app"
            }
          >
            <Image src="/3.png" alt="project picture" fill />
          </Link>
          <Link
            href={
              "https://digital-business-q747k8llk-maleks-projects-4df77c24.vercel.app"
            }
          >
            <Image src="/4.png" alt="project picture" fill />
          </Link>
          <Link
            href={
              "https://digital-business-q747k8llk-maleks-projects-4df77c24.vercel.app"
            }
          >
            <Image src="/5.png" alt="project picture" fill />
          </Link>
          <Link
            href={
              "https://prayer-time-hwka4voxa-maleks-projects-4df77c24.vercel.app"
            }
          >
            <Image src="/6.png" alt="project picture" fill />
          </Link>
        </Divz>
        <p className=" p-3 text-1xl font-bold text-slate-100 text-center">
          Use arrows to navigate through projects{" "}
        </p>
      </main>
    </>
  );
}
