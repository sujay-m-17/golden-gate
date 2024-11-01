import withMT from "@material-tailwind/react/utils/withMT";
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

export default withMT({
	
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		screens: {
			bsm: {
				max: '319px'
			},
			sm: '320px',
			bmd: {
				max: '749px'
			},
			md: '750px',
			blg: {
				max: '1024px'
			},
			lg: '1025px',
			xl: '1440px',
			pageMaxWidth: '1440px'
		},
		fontFamily: {
			heading: ["Bai Jamjuree", "system-ui"],
			primary: ["Blinker", "system-ui"],
			secondary: ["Playwrite", "system-ui"],
			button: ["Blinker", "system-ui"]
		},
		fontSize: {
			'h0-m': ["5.2rem", "6.4rem"],
			'h1-m': ["2.2rem", "2.6rem"],
			'h2-m': ["1.8rem", "2.4rem"],
			'h3-m': ["1.4rem", "2rem"],
			'h4-m': ["1.2rem", ".18rem"],
			'h4-md-m': ["1.4rem", "2rem"],
			'h5-m': ["1.2rem", "1.8rem"],
			'h5-md-m': ["1.2rem", "1.8rem"],
			'body-l-m': ["1.6rem", "2.4rem"],
			'body-m': ["1.4rem", "2rem"],
			'body-sm-m': ["1.2rem", "1.8rem"],
			'body-xsm-m': ["1rem", "1.6rem"],
			h0: ["5.2rem", "6.4rem"],
			h1: ["2.2rem", "3.2rem"],
			h2: ["1.8rem", "2.4rem"],
			h3: ["1.6rem", "2.2rem"],
			h4: ["1.4rem", "2rem"],
			'h4-md': ["1.4rem", "2rem"],
			h5: ["1.2rem", "1.8rem"],
			'h5-md': ["1.2rem", "1.8rem"],
			'body-l': ["1.8rem", "2.6rem"],
			body: ["1.6rem", "2.4rem"],
			'body-sm': ["1.4rem", "2rem"],
			'body-xsm': ["1.2rem", "1.8rem"]
		},
		extend: {
			boxShadow: {
				'custom-lg': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
				'custom-glass': 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				grid: {
					'0%': {
						transform: 'translateY(-50%)'
					},
					'100%': {
						transform: 'translateY(0)'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				ripple: {
					'0%, 100%': {
						transform: 'translate(-50%, -50%) scale(1)'
					},
					'50%': {
						transform: 'translate(-50%, -50%) scale(0.9)'
					}
				},
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					}
				}
			},
			animation: {
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				grid: 'grid 15s linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				ripple: 'ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite',
				"meteor-effect": "meteor 5s linear infinite",
			}
		}
	},
	plugins: [
		addVariablesForColors,
		require("tailwindcss-animate")
	],
});

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
}