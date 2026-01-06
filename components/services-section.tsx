import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";
import { THEME } from "@/lib/constants/theme";

export function ServicesSection() {
  return (
    <section
      id="services"
      className={`relative ${THEME.spacing.section.py} ${THEME.spacing.section.px}`}
    >
      <div className={THEME.spacing.container}>
        <div className="text-center mb-16">
          <h2 className={`${THEME.typography.heading.h2} mb-4 text-balance`}>
            {SERVICES.sectionTitle}
          </h2>
          <p
            className={`${THEME.typography.body.large} text-muted-foreground max-w-2xl mx-auto text-pretty`}
          >
            {SERVICES.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.items.map((service, index) => (
            <Card key={index} className={THEME.card.base}>
              <div
                className={`mb-4 p-3 ${THEME.borderRadius.md} bg-accent/10 w-fit group-hover:bg-accent/20 ${THEME.transitions.colors}`}
              >
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className={`${THEME.typography.heading.h4} mb-3`}>
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="h-1 w-1 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
