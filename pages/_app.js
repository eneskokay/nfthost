import '../styles/globals.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@/providers/UserProvider'
import { GeneratorProvider } from '@/providers/GeneratorProvider'
import { WebsiteProvider } from '@/providers/WebsiteProvider'
import { CoreProvider } from '@/providers/CoreProvider'
import theme from '@/utils/theme'
import posthog from 'posthog-js'

const MyApp = ({ Component, pageProps }) => {
    const router = useRouter();

    useEffect(() => {
        posthog.init('phc_yllraz82JEawY3IhEhXl3yEJIKN4ueFJT66AYBc3tCe', { api_host: 'https://app.posthog.com' });

        const handleRouteChange = () => {
            posthog.capture('$pageview');
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [])

    return (
        <ChakraProvider theme={theme}>
            <CoreProvider>
                <UserProvider>
                    <GeneratorProvider>
                        <WebsiteProvider>
                            <Component {...pageProps} />
                        </WebsiteProvider>
                    </GeneratorProvider>
                </UserProvider>
            </CoreProvider>
        </ChakraProvider>
    )
}

export default MyApp
