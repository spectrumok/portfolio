import { ModeToggle } from "@/components/mode-toggle";
import { Motion } from "@/components/motion";
import { Button } from "@/components/ui/button";
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

      <Motion direction="down" delay={2} className="pt-35">
        <p className="text-3xl">my past work</p>

        <div className="w-full gap-2 pt-5">
          <div className="flex">
            <a className="underline text-xl" href="https://www.roblox.com/communities/34382694/Going-Ape-Game">
              Going Ape
            </a>
          </div>

          <p className="text-muted-foreground">developer • June 2025 - current</p>
        </div>
      </Motion>

      <a className="mt-auto underline text-muted-foreground text-xs" href="">
        find the code for this portfolio here
      </a>
    </main>
  );
}
