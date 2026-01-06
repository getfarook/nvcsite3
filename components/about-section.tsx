import { Card } from "@/components/ui/card";
import { SECTION_VALUES, SECTION_STATS } from "@/lib/constants/about";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              About NOVIZCO INFOTECH
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are a leading Indian technology services company dedicated to
              delivering innovative digital solutions that drive business growth
              and transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With expertise spanning web and mobile development, UI/UX design,
              artificial intelligence, and cloud computing, we help businesses
              navigate the complexities of modern technology.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team of passionate engineers, designers, and strategists work
              collaboratively to turn your vision into reality, delivering
              solutions that are not just technically excellent but also
              commercially successful.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SECTION_VALUES.map((value, index) => (
              <Card
                key={index}
                className="p-6 border-border/50 hover:border-accent/50 transition-all hover:shadow-xl hover:shadow-accent/5"
              >
                <div className="mb-4 p-3 rounded-lg bg-accent/10 w-fit">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {SECTION_STATS.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
