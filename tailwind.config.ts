import {type Config} from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme";

export default {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                "primary-lowest": "var(--primary-lowest)",
                "primary-lower": "var(--primary-lower)",
                "primary-low": "var(--primary-low)",
                "primary-medium": "var(--primary-medium)",
                "primary-high": "var(--primary-high)",
                "primary-higher": "var(--primary-higher)",
                "primary-highest": "var(--primary-highest)",

                "dark-primary-lowest": "var(--dark-primary-lowest)",
                "dark-primary-lower": "var(--dark-primary-lower)",
                "dark-primary-low": "var(--dark-primary-low)",
                "dark-primary-medium": "var(--dark-primary-medium)",
                "dark-primary-high": "var(--dark-primary-high)",
                "dark-primary-higher": "var(--dark-primary-higher)",
                "dark-primary-highest": "var(--dark-primary-highest)",

                "secondary-lowest": "var(--secondary-lowest)",
                "secondary-lower": "var(--secondary-lower)",
                "secondary-low": "var(--secondary-low)",
                "secondary-medium": "var(--secondary-medium)",
                "secondary-high": "var(--secondary-high)",
                "secondary-higher": "var(--secondary-higher)",
                "secondary-highest": "var(--secondary-highest)",

                "dark-secondary-lowest": "var(--dark-secondary-lowest)",
                "dark-secondary-lower": "var(--dark-secondary-lower)",
                "dark-secondary-low": "var(--dark-secondary-low)",
                "dark-secondary-medium": "var(--dark-secondary-medium)",
                "dark-secondary-high": "var(--dark-secondary-high)",
                "dark-secondary-higher": "var(--dark-secondary-higher)",
                "dark-secondary-highest": "var(--dark-secondary-highest)",

                "neutral-lowest": "var(--neutral-lowest)",
                "neutral-lower": "var(--neutral-lower)",
                "neutral-low": "var(--neutral-low)",
                "neutral-medium": "var(--neutral-medium)",
                "neutral-high": "var(--neutral-high)",
                "neutral-higher": "var(--neutral-higher)",
                "neutral-highest": "var(--neutral-highest)",

                "dark-neutral-lowest": "var(--dark-neutral-lowest)",
                "dark-neutral-lower": "var(--dark-neutral-lower)",
                "dark-neutral-low": "var(--dark-neutral-low)",
                "dark-neutral-medium": "var(--dark-neutral-medium)",
                "dark-neutral-high": "var(--dark-neutral-high)",
                "dark-neutral-higher": "var(--dark-neutral-higher)",
                "dark-neutral-highest": "var(--dark-neutral-highest)",

                "success-lowest": "var(--success-lowest)",
                "success-lower": "var(--success-lower)",
                "success-low": "var(--success-low)",
                "success-medium": "var(--success-medium)",
                "success-high": "var(--success-high)",
                "success-higher": "var(--success-higher)",
                "success-highest": "var(--success-highest)",

                "dark-success-lowest": "var(--dark-success-lowest)",
                "dark-success-lower": "var(--dark-success-lower)",
                "dark-success-low": "var(--dark-success-low)",
                "dark-success-medium": "var(--dark-success-medium)",
                "dark-success-high": "var(--dark-success-high)",
                "dark-success-higher": "var(--dark-success-higher)",
                "dark-success-highest": "var(--dark-success-highest)",

                "warning-lowest": "var(--warning-lowest)",
                "warning-lower": "var(--warning-lower)",
                "warning-low": "var(--warning-low)",
                "warning-medium": "var(--warning-medium)",
                "warning-high": "var(--warning-high)",
                "warning-higher": "var(--warning-higher)",
                "warning-highest": "var(--warning-highest)",

                "dark-warning-lowest": "var(--dark-warning-lowest)",
                "dark-warning-lower": "var(--dark-warning-lower)",
                "dark-warning-low": "var(--dark-warning-low)",
                "dark-warning-medium": "var(--dark-warning-medium)",
                "dark-warning-high": "var(--dark-warning-high)",
                "dark-warning-higher": "var(--dark-warning-higher)",
                "dark-warning-highest": "var(--dark-warning-highest)",

                "danger-lowest": "var(--danger-lowest)",
                "danger-lower": "var(--danger-lower)",
                "danger-low": "var(--danger-low)",
                "danger-medium": "var(--danger-medium)",
                "danger-high": "var(--danger-high)",
                "danger-higher": "var(--danger-higher)",
                "danger-highest": "var(--danger-highest)",

                "dark-danger-lowest": "var(--dark-danger-lowest)",
                "dark-danger-lower": "var(--dark-danger-lower)",
                "dark-danger-low": "var(--dark-danger-low)",
                "dark-danger-medium": "var(--dark-danger-medium)",
                "dark-danger-high": "var(--dark-danger-high)",
                "dark-danger-higher": "var(--dark-danger-higher)",
                "dark-danger-highest": "var(--dark-danger-highest)",

            }
        },
    },
    plugins: [],
} satisfies Config;
