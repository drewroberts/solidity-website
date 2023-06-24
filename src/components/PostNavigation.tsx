import { Flex, Icon, Spacer, Text } from '@chakra-ui/react'
import { MdPlayArrow } from 'react-icons/md'
import { ButtonLink } from '@/components'
import { useCleanRouterPath } from '@/hooks'
import { BLOG_PATH } from '@/constants'

interface PostNavigationProps {
  availableURLs: string[]
}

export const PostNavigation: React.FC<PostNavigationProps> = ({
  availableURLs,
}) => {
  const cleanRouterPath = useCleanRouterPath().replace(BLOG_PATH, '')
  const currentPost = availableURLs.indexOf(cleanRouterPath)
  const isFirstPost = currentPost === 0
  const isOldestPost = currentPost === availableURLs.length - 1

  return (
    <Flex
      justifyContent="center"
      gap={{ base: 4, sm: 8 }}
      direction={{ base: 'column', sm: 'row' }}
    >
      {isFirstPost ? (
        <Spacer />
      ) : (
        <ButtonLink
          href={`${BLOG_PATH}${availableURLs[currentPost - 1]}`}
          variant="outline"
        >
          <Flex flexWrap="nowrap" me="auto" alignItems="center">
            <Icon
              as={MdPlayArrow}
              size={16}
              marginEnd={2}
              transform="rotate(180deg)"
            />
            <Text fontFamily="heading" textTransform="uppercase">
              Previous post
            </Text>
          </Flex>
        </ButtonLink>
      )}

      {isOldestPost ? (
        <Spacer />
      ) : (
        <ButtonLink
          href={`${BLOG_PATH}${availableURLs[currentPost + 1]}`}
          variant="outline"
        >
          <Flex flexWrap="nowrap" ms="auto" alignItems="center">
            <Text
              as="span"
              fontFamily="heading"
              textTransform="uppercase"
              textAlign="end"
            >
              Next post
            </Text>
            <Icon as={MdPlayArrow} size={16} marginStart={2} />
          </Flex>
        </ButtonLink>
      )}
    </Flex>
  )
}