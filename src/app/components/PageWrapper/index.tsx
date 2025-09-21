"use client";
import {
  Github,
  Linkedin,
  FolderCode,
  ClipboardList,
  SquareUser,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  ListItem,
} from "@/components/ui/navigation-menu";
import { AthleteItems, CoachItems } from "./NavItems";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@physiq/ui";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <NavigationMenu className="right-5 left-5">
        <NavigationMenuList>
          <div className=" flex items-center">
            <NavigationMenuItem>
              <Link href="/">
                <Image
                  src={`/images/text-${theme}-transparent-200x80.png`}
                  alt="PhysiQ Logo"
                  width={80}
                  height={32}
                />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about">
                <Button variant="link" text="About" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ai">
                <Button variant="link" text="AI" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Athletes</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {AthleteItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Coaches</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {CoachItems.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact">
                <Button variant="link" text="Contact" />
              </Link>
            </NavigationMenuItem>
          </div>
          <div className="flex items-center gap-2">
            <NavigationMenuItem>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setTheme((theme || "dark") === "light" ? "dark" : "light")
                }
                icon={theme === "light" ? Moon : Sun}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="secondary"
                onClick={() =>
                  window.open("https://coach.physiq.app", "_blank")
                }
                text="Coaches"
                icon={ClipboardList}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                onClick={() => window.open("https://my.physiq.app", "_blank")}
                text="Athletes"
                icon={SquareUser}
              />
            </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-1 pb-10">{children}</div>
      <div className="bg-background border-t border-border text-center py-1 mt-auto">
        <p className="text-muted-foreground text-sm flex justify-center items-center gap-2">
          Designed and developed by John Gaynor.
          <span className="flex items-center gap-2 ml-2">
            <a
              href="https://github.com/johngaynor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full hover:bg-muted"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/john-gaynor1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full hover:bg-muted"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://johngaynor.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors p-3 rounded-full hover:bg-muted"
              aria-label="Portfolio"
            >
              <FolderCode className="h-5 w-5" />
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
