import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr';


export default function Home() {
  const { data: _projects } = swr('/api/projects');
  const projects = _projects ? _projects : null;

  return (
    <>
      <div className="py-20">
        <p className="text-3xl text-white font-semibold text-center">My Projects</p>
        <p className="text-xl text-white/50 font-normal text-center mb-5">The projects i am actively working on take place in this area.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 items-center mt-2">
          {_projects ? (
            projects ? (
              projects.map((_, __) => (
                <a href={_.link} target="_blank" rel="noreferrer" key={__} className="bg-[#191932]/20 p-4 hover:bg-[#191932]/30 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full">
                  <img alt="xrqu" src={_.image} width="1024" className="rounded-lg" height="512" />
                  <p className="text-xl font-semibold mt-5">{_.name}</p>
                  <p className="text-md font-normal text-white/50 h-24 overflow-small" style={{ "overflow": 'auto' }}>{_.description}</p>
                </a>
              ))
            ) : (
              Array.from({ length: 6 }).map((_, __) => (
                <div key={__} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                  <div className="flex-shrink-0 w-[100%] h-[8.6rem]">
                    <div className="w-full h-full bg-[#191932]/50 rounded-lg animate-pulse" />
                  </div>
                  <div className="bg-[#191932]/50 animate-pulse w-1/2 h-[24px] rounded-md mt-5" />
                  <div className="mt-2 bg-[#191932]/50 animate-pulse w-full h-[96px] rounded-md" />
                </div>
              ))
            )
          ) : (
            Array.from({ length: 6 }).map((_, __) => (
              <div key={__} className="bg-[#191932]/20 p-4 rounded-lg w-full">
                <div className="flex-shrink-0 w-[100%] h-[8.6rem]">
                  <div className="w-full h-full bg-[#191932]/50 rounded-lg animate-pulse" />
                </div>
                <div className="bg-[#191932]/50 animate-pulse w-1/2 h-[24px] rounded-md mt-5" />
                <div className="mt-2 bg-[#191932]/50 animate-pulse w-full h-[96px] rounded-md" />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}
