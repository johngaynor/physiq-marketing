"use client";
import {
  Github,
  Linkedin,
  FolderCode,
  ClipboardList,
  SquareUser,
  Menu,
  X,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  ListItem,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AthleteItems, CoachItems } from "./NavItems";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@physiq/ui";
import { useState } from "react";

export default function PageWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Desktop Navigation - lg and above */}
      <NavigationMenu className="hidden lg:block right-5 left-5">
        <NavigationMenuList>
          <div className="flex items-center">
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

      {/* Medium screens (md to lg) - Normal nav with popover for action buttons */}
      <NavigationMenu className="hidden md:block lg:hidden right-5 left-5">
        <NavigationMenuList className="w-full max-w-none justify-between">
          <div className="flex items-center">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
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
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" icon={Menu} />
              </PopoverTrigger>
              <PopoverContent className="w-64" align="end">
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setTheme(theme === "light" ? "dark" : "light");
                    }}
                    icon={theme === "light" ? Moon : Sun}
                    text={theme === "light" ? "Dark Mode" : "Light Mode"}
                    className="w-full justify-start"
                  />
                  <Button
                    variant="secondary"
                    onClick={() => {
                      window.open("https://coach.physiq.app", "_blank");
                    }}
                    text="Coaches"
                    icon={ClipboardList}
                    className="w-full justify-start"
                  />
                  <Button
                    onClick={() => {
                      window.open("https://my.physiq.app", "_blank");
                    }}
                    text="Athletes"
                    icon={SquareUser}
                    className="w-full justify-start"
                  />
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Mobile Navigation Header - smaller than md */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <Link href="/">
          <Image
            src={`/images/text-${theme}-transparent-200x80.png`}
            alt="PhysiQ Logo"
            width={80}
            height={32}
          />
        </Link>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          icon={mobileMenuOpen ? X : Menu}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b">
          <div className="p-4 space-y-4">
            {/* Navigation Links - shown on md and below */}
            <div className="md:hidden space-y-2">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="link"
                  text="About"
                  className="w-full justify-start"
                />
              </Link>
              <Link href="/ai" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="link"
                  text="AI"
                  className="w-full justify-start"
                />
              </Link>

              {/* Athletes dropdown content */}
              <div className="pl-4 space-y-1">
                <h3 className="font-medium text-sm text-muted-foreground pt-1">
                  Athletes
                </h3>
                {AthleteItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="link"
                      text={item.title}
                      className="w-full justify-start text-sm"
                    />
                  </Link>
                ))}
              </div>

              {/* Coaches dropdown content */}
              <div className="pl-4 space-y-1">
                <h3 className="font-medium text-sm text-muted-foreground">
                  Coaches
                </h3>
                {CoachItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Button
                      variant="link"
                      text={item.title}
                      className="w-full justify-start text-sm"
                    />
                  </Link>
                ))}
              </div>

              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="link"
                  text="Contact"
                  className="w-full justify-start"
                />
              </Link>
            </div>

            {/* Action Buttons - shown on lg and below when menu is open */}
            <div className="border-t pt-4 space-y-2">
              <Button
                variant="outline"
                onClick={() => {
                  setTheme((theme || "dark") === "light" ? "dark" : "light");
                  setMobileMenuOpen(false);
                }}
                icon={theme === "light" ? Moon : Sun}
                text={theme === "light" ? "Dark Mode" : "Light Mode"}
                className="w-full justify-start"
              />
              <Button
                variant="secondary"
                onClick={() => {
                  window.open("https://coach.physiq.app", "_blank");
                  setMobileMenuOpen(false);
                }}
                text="Coaches"
                icon={ClipboardList}
                className="w-full justify-start"
              />
              <Button
                onClick={() => {
                  window.open("https://my.physiq.app", "_blank");
                  setMobileMenuOpen(false);
                }}
                text="Athletes"
                icon={SquareUser}
                className="w-full justify-start"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex-1 pb-10">{children}</div>
      <div className="bg-background border-t border-border text-center py-1 mt-auto">
        <div className="text-muted-foreground text-sm flex flex-col sm:flex-row justify-center items-center gap-2">
          <span className="flex items-center gap-2 order-2 sm:order-2">
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
          <span className="order-1 sm:order-1 pt-1 sm:pt-0">
            Designed and developed by John Gaynor.
          </span>
        </div>
      </div>
    </div>
  );
}
