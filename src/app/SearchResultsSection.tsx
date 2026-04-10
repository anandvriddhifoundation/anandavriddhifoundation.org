'use client';
import { SearchResult } from '@/lib/youtubeSearchTypes';
import Image from 'next/image';
import IframeClient from '@/components/IframeClient';
import {
  Drawer,
  DrawerClose,
  // DrawerContent,
  DrawerTrigger,
} from '@/shadcn_data/components/ui/drawer';
import { ScrollArea } from '@/shadcn_data/components/ui/scroll-area';
import dynamic from 'next/dynamic';

const DrawerContent = dynamic(
  () =>
    import('@/shadcn_data/components/ui/drawer').then(
      (mod) => mod.DrawerContent,
    ),
  {
    ssr: false,
  },
);

const SearchResultsSection = ({ result }: { result: SearchResult }) => {
  // const item = result.items[0]
  return (
    <div
      // opts={{
      // 	align: "start",
      // }}
      // plugins={[
      // 	AutoHeight()
      // ]}
      // orientation='horizontal'
      className="w-full"
    >
      {/* <CarouselPrevious /> */}
      <section className="grid grid-cols-1 sm:grid-cols-4 sm:gap-2">
        {/* {result.items.map((item, index) => {
			return <p key={index} dangerouslySetInnerHTML={{
				__html: item.snippet.title
			}} />
		})} */}

        {result.items &&
          result.items.map((item, index) => {
            return (
              <div key={index} className="sm:basis-1/4">
                <Drawer>
                  <DrawerTrigger>
                    <div className="my-2">
                      <div className="w-full aspect-video">
                        <Image
                          src={item.snippet.thumbnails.high.url}
                          alt={item.snippet.title}
                          width={item.snippet.thumbnails.high.width}
                          height={item.snippet.thumbnails.high.height}
                          className="w-full h-full rounded-xl border-0"
                        />
                      </div>
                      <p
                        className="text-base"
                        dangerouslySetInnerHTML={{
                          __html: item.snippet.title,
                        }}
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="container mx-auto max-w-full sm:max-w-[75vw] h-screen text-black">
                    <ScrollArea className="min-h-screen sm:container sm:mx-auto">
                      {/* <Image src={item.snippet.thumbnails.high.url} alt={item.snippet.title} width={item.snippet.thumbnails.high.width} height={item.snippet.thumbnails.high.height} className='w-full aspect-video rounded-xl border-0' /> */}
                      <IframeClient
                        src={`https://www.youtube.com/embed/${item.id.videoId}`}
                        className="w-full aspect-video rounded-xl border-0"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen={true}
                        // width="100%"
                        // height={315}
                        // loading="lazy"
                        // style={{ borderWidth: 0 }}
                      />

                      <h2 className="text-lg sm:text-3xl">
                        {item.snippet.title}
                      </h2>
                      <p className="text-sm sm:text-lg">
                        {item.snippet.description}
                      </p>
                      <hr className="my-2 border-1 border-black" />

                      <h4 className="text-xl sm:text-3xl">
                        Video Requirements
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <h5 className="text-lg">Formats</h5>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              MP4
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              MOV
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              sLOG
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              dLOG
                            </span>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-lg">Resolution</h5>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              SD
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              FHD
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              4K
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              8K
                            </span>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-lg">Frame Rate (FPS)</h5>
                          <div className="grid grid-cols-2 gap-2">
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              60
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              120
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              240
                            </span>
                            <span className="p-4 border border-black rounded-lg text-center mx-2">
                              300
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          type="button"
                          className="bg-gray-400 rounded-lg px-5 py-4 mx-2 mt-2 mb-8"
                        >
                          Purchase
                        </button>
                      </div>
                    </ScrollArea>
                    <DrawerClose className="text-black" />
                  </DrawerContent>
                </Drawer>
              </div>
            );
          })}
      </section>
      {/* <CarouselNext /> */}
    </div>
  );
};

export default SearchResultsSection;
