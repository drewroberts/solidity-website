import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import {
  BlogPreview,
  ButtonLink,
  // CompilerPlayground,
  EventPreview,
  Hero,
  Link,
  PageMetadata,
  Section,
} from '@/components'
import { BLOG_URL, CONTRIBUTE_PATH, DOCS_URL } from '@/constants'

const VERSION = 'v0.8.20' // TODO: Fetch latest version from GitHub

export default function Home() {
  return (
    <>
      <PageMetadata
        title="Home"
        description="Solidity is a statically-typed curly-braces programming language designed for developing smart contracts that run on Ethereum."
      />
      <main>
        <Hero
          header="Solidity"
          cta={[{ name: 'Get to the docs', href: DOCS_URL }]}
        >
          A statically-typed curly-braces programming language designed for
          developing smart contracts that run on{' '}
          <Link href="https://ethereum.org">Ethereum</Link>.
        </Hero>
        <Section py={8}>
          <Flex
            as="aside"
            direction={['column', null, 'row']}
            gap={[8, null, 16]}
          >
            <Box fontSize="3xl" maxW="8ch">
              <Text fontWeight="bold" fontSize="md" fontFamily="body">
                latest version
              </Text>
              <Text fontFamily="mono">Solidity {VERSION}</Text>
            </Box>
            <Flex direction="column" justify="space-between" gap={6}>
              <Box>
                <Text maxW="container.sm">
                  Solidity 0.8.20 includes a range of improvements in the via-IR
                  pipeline and improves the list of events exposed in the
                  contract ABI, and, most importantly, introduces support for
                  the Shanghai hard fork!
                </Text>
                <Text>We have also included 3 bugfixes in this release!</Text>
              </Box>
              <ButtonLink href="https://blog.soliditylang.org/2023/05/10/solidity-0.8.20-release-announcement/">
                Release announcement
              </ButtonLink>
            </Flex>
          </Flex>
        </Section>

        <Section bg="gray.100" py={16}>
          <Flex direction={['column', null, null, 'row']} gap={12}>
            <Flex direction="column" gap={8} maxW="container.sm">
              <Text as="h2" textStyle="h2">
                New to Solidity
              </Text>
              <Text>
                As a beginner, you find great tutorials, resources and tools
                that help you get started building with Solidity on the{' '}
                <Link href="https://ethereum.org/developers/">
                  ethereum.org developer portal
                </Link>
                .
              </Text>
              <Text>
                Alternatively, you can start by learning the basics about
                blockchain, smart contracts and the Ethereum Virtual Machine
                (EVM) in the Solidity docs.
              </Text>
              <ButtonLink href={DOCS_URL}>Get started</ButtonLink>
            </Flex>
            {/* <CompilerPlayground /> */}
          </Flex>
        </Section>

        <Section py={16} gap={6}>
          <Text as="h2" textStyle="h2">
            Stay Updated
          </Text>
          <Text maxW="container.sm">
            As a relatively young language, Solidity is advancing at a rapid
            speed. We aim for a regular (non-breaking) release every month, with
            approximately one breaking release per year. You can follow the
            implementation status of new features in the{' '}
            <Link href="https://github.com/ethereum/solidity/projects/43">
              Solidity Github project
            </Link>
            .
          </Text>
          <Text maxW="container.sm">
            You can see the upcoming changes for the next breaking release by
            switching from the default branch (`develop`) to the `breaking
            branch`. You can actively shape Solidity by providing your input and
            participating in the language design.
          </Text>
          <Text />
          <Text textStyle="h4">Latest from the blog</Text>
          <BlogPreview />
          <ButtonLink href={BLOG_URL}>View all blog posts</ButtonLink>
        </Section>

        <Section bg="gray.100" py={[24, null, null, 32]} /* gap={6} */>
          <Flex direction={['column', null, null, 'row']} gap={12}>
            <Flex direction="column" gap={8} maxW="container.xs">
              <Text as="h2" textStyle="h2">
                Contribute to Solidity
              </Text>
              <Text>
                Contribute towards enhancing Solidity by sharing your opinion in
                the language design discussions!
              </Text>
              <Text>
                We welcome Solidity power users, auditors, security experts and
                tooling developers to get involved and actively contribute to
                the Solidity language design process.
              </Text>
              <ButtonLink href={CONTRIBUTE_PATH}>How to contribute</ButtonLink>
            </Flex>
            <Grid
              flex={1}
              placeItems="center"
              borderRadius="base"
              bg="gray.900"
            >
              <Image
                src="/assets/use-case-glyph-1.svg"
                alt="Solidity art"
                width={200}
                height={100}
                objectFit="contain"
              />
            </Grid>
          </Flex>
        </Section>

        <Section py={16} gap={6}>
          <Text as="h2" textStyle="h2">
            Events
          </Text>
          <Flex direction={['column', null, null, 'row']} gap={8}>
            <Box maxW="container.sm" sx={{ p: { mb: 2 } }} flex={3}>
              <Text>
                The Solidity Summit is a free interactive forum for people
                involved and interested in the Solidity language and the
                ecosystem around it.
              </Text>
              <Text>
                After a first virtual Solidity Summit in 2020, we met in person
                for the second Solidity Summit in 2022 in Amsterdam.
              </Text>
              <Text>
                Solidity Summits usually feature talks & discussions on
                Solidity, Yul, language design and tooling. The event series
                aims to...
              </Text>
              <Text>
                Enable useful (language-design related) discussions which result
                in improvement proposals and actual implementations.
              </Text>
              <Text>
                Foster communication between teams working on similar topics.
              </Text>
              <Text>
                Identify needs for the smart contract ecosystem for Ethereum.
              </Text>
            </Box>
            <Box flex={2} sx={{ 'aspect-ratio': '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/6m5EDuCjxgk?list=PLX8x7Zj6Vezl1lqBgxiQH3TFbRNZza8Fk"
                title="Solidity Summit 2022 - 01 Opening &amp; Welcome - Franziska Heintel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </Box>
          </Flex>
          <Text textStyle="h4">Past events</Text>
          <EventPreview />
        </Section>
      </main>
    </>
  )
}
