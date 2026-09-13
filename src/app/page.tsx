import { ModeToggle } from "@/components/mode-toggle";
import { Motion } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-35 gap-2 justify-between p-6">
      <Motion direction="down" className="items-center justify-center flex flex-col gap-3">
        <ModeToggle />
        <p className="text-5xl">hey,</p>
      </Motion>

      <Motion direction="down" delay={0.4} distance={15}>
        <p className="text-4xl">i&apos;m spectrum!</p>
      </Motion>

      <Motion direction="down" delay={0.8} distance={15} className="pt-5 pb-5">
        <p className="text-2xl text-wrapped max-w-200">i&apos;m an austrian🇦🇹 software developer focusing on game development, web development and backend development.</p>
      
        <p>my tech stack consists of Luau, React, Rojo, roblox-ts, and node.js.</p>
      </Motion>

      <Motion direction="down" delay={1.2} className="flex flex-col items-center gap-1 justify-center">
        <p className="text-xl">find me on</p>

        <div className="items-center gap-1 justify-center flex">
          <Motion delay={1.4}>
            <Link href="https://github.com/spectrumok">
              <Button variant="outline">
                <Image
                  alt="GitHub"
                  src="/github.svg"
                  width={16}
                  height={16}
                  className="invert dark:invert-0"
                />

                GitHub
              </Button>
            </Link>
          </Motion>

          <Motion delay={1.4}>
            <Link href="https://www.roblox.com/users/1603098298/profile">
              <Button variant="outline">
                <Image
                  alt="ROBLOX"
                  src="/roblox.svg"
                  width={16}
                  height={16}
                />

                ROBLOX
              </Button>
            </Link>
          </Motion>

          <Motion delay={1.4}>
            <Link href="https://github.com/spectrumok">
              <Button variant="outline">
                <Image
                  alt="Discord"
                  src="/discord.svg"
                  width={16}
                  height={16}
                />

                Discord
              </Button>
            </Link>
          </Motion>
        </div>
      </Motion>

      <Motion direction="down" delay={2} className="pt-10 flex flex-col items-center justify-center gap-2">
        <p className="text-3xl">my past work</p>
        <p className="text-muted-foreground">below you&apos;ll find all previous projects i&apos;ve worked on</p>

        <Separator />

        <div className="w-full flex flex-col gap-1 pt-5">
          <div className="flex flex-col gap-2">
            <p className="text-xl">Going Ape</p>

            <div className="flex gap-1">
              <Link href="https://www.roblox.com/communities/34382694/Going-Ape-Game">
                <Button size={"xs"} variant="outline">
                  <Image
                    alt="ROBLOX"
                    src="/roblox.svg"
                    width={16}
                    height={16}
                  />

                  ROBLOX Group
                </Button>
              </Link>

              <Link href="https://discord.gg/8EC5Bwhp3v">
                <Button size={"xs"} variant="outline">
                  <Image
                    alt="Discord"
                    src="/discord.svg"
                    width={16}
                    height={16}
                  />

                  Discord Server
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-muted-foreground">Developer • June 2025 - current</p>

          <p className="text-wrapped w-full max-w-100">At Going Ape, I work with a professional development team and am responsible for numerous tasks, including but not limited to creating and maintaining systems, efficent problem solving, handling Server Authority mechanics, assisting with React-based UI components, and regular scripting duties.</p>
        </div>
      </Motion>

      <a className="mt-auto underline text-muted-foreground text-xs pt-10" href="https://github.com/spectrumok/portfolio">
        find the code for this portfolio here
      </a>
    </main>
  );
}
