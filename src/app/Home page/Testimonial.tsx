import YoutubeEmbed from "@/components/YoutubeEmbed";

export default function Testimonial() {
  return (
    <div className="px-2 md:px-20">
      <h2 className="my-16 text-xl font-semibold text-center text-blue-400 lg:text-3xl lg:my-28">
        Apa Kata Mereka
      </h2>
      <div className="flex flex-col gap-4 lg:flex-row h-[540px] lg:h-auto">
        <YoutubeEmbed title="aaa" videoId="zM7xqOqIcdw" />
        <YoutubeEmbed title="aaa" videoId="gePPu-boBgw" />
      </div>
    </div>
  );
}
