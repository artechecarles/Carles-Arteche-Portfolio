import Link from "next/link"
import { Mail, Github, Linkedin, Download, Calendar, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ContactForm } from "@/components/contact-form"
import { NavLinks } from "@/components/nav-links"
import { SmoothScrollLink } from "@/components/smooth-scroll-link"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-14 items-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </Link>
            <NavLinks />
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="ml-auto hidden h-8 md:flex" asChild>
                <SmoothScrollLink href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </SmoothScrollLink>
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-transparent z-[-5]"></div>
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Hi, I'm <span className="text-primary">Carles Arteche</span>
                  </h1>
                  <p className="text-xl text-muted-foreground">Full Stack Developer</p>
                </div>
                <div className="max-w-[600px] text-muted-foreground md:text-xl">
                  <p>I build accessible, responsive, and functional web applications with modern technologies.</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <SmoothScrollLink href="#contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </SmoothScrollLink>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Link href="https://github.com/artechecarles" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/carlesarteche/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-border">
                  <Image src="/profile-image.jpg" alt="Profile" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-[-5]"></div>
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">About Me</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                I'm a creative and proactive person with strong teamwork and problem-solving skills. I'm known for being
                responsible, adaptable, and motivated to contribute to meaningful projects. I value continuous learning
                and always look for opportunities to grow and deliver solid, effective results.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Experience</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                My professional journey and work experience.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              {/* Experience Item 1 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-10">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Jul 2023 - Present</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <Building className="mr-2 h-4 w-4" />
                    <span className="font-medium">T-Systems</span>
                  </div>
                  <p className="text-muted-foreground">
                    Working on full-stack development for a German client using Angular 14, Java 17 (Spring Boot), and
                    Ng Zorro. Responsible for improving UI/UX with HTML/CSS, and collaborating in an agile environment
                    with CI pipelines and JIRA.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Spring Boot</Badge>
                    <Badge variant="secondary">HTML & CSS</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">Docker</Badge>
                  </div>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20 pb-10">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">Frontend Developer</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Dec 2022 - Jul 2023</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <Building className="mr-2 h-4 w-4" />
                    <span className="font-medium">Grupo Oesía</span>
                  </div>
                  <p className="text-muted-foreground">
                    Focused on frontend development using Angular, HTML, and CSS, with some backend support in Spring
                    Boot. Contributed to interface design, usability improvements, and worked within agile sprints using
                    CI tools.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">HTML & CSS</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative pl-8 border-l-2 border-muted-foreground/20">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"></div>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold">Junior Web Developer (Intern)</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>Sep 2021 - Jul 2022</span>
                    </div>
                  </div>
                  <div className="flex items-center text-primary">
                    <Building className="mr-2 h-4 w-4" />
                    <span className="font-medium">Mecalux IT</span>
                  </div>
                  <p className="text-muted-foreground">
                    Completed a dual internship developing and testing features in Angular and Java (Spring Boot).
                    Supported both frontend and backend tasks, and used tools like Kendo, Liquibase, and Bootstrap in a
                    continuous integration environment.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">Angular</Badge>
                    <Badge variant="secondary">HTML & CSS</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Java (Spring Boot)</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button variant="outline" asChild className="group">
                  <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
                    View Full Resume
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-[-5]"></div>
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Skills</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
                Technologies and tools I work with.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                <Badge variant="outline" className="px-4 py-2">
                  Frontend
                </Badge>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge>Angular</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>HTML & CSS</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>SASS</Badge>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                <Badge variant="outline" className="px-4 py-2">
                  Backend
                </Badge>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge>Java</Badge>
                  <Badge>Spring Boot</Badge>
                  <Badge>Python</Badge>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                <Badge variant="outline" className="px-4 py-2">
                  Database
                </Badge>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge>MySQL</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                <Badge variant="outline" className="px-4 py-2">
                  DevOps
                </Badge>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm z-[-5]"></div>
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-8">
                Feel free to reach out for collaborations or just a friendly hello.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Ways to reach me directly</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>artechecarles@gmail.com</p>
                  </div>
                  <div className="flex gap-4">
                    <Link href="https://github.com/artechecarles" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/carlesarteche/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Carles Arteche. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/artechecarles" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/carlesarteche/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
