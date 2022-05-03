import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is a branch of Wordle in Latin that was customized to use Lewis for source words. For the original,{' '}
        <a
          href="https://github.com/theotarr/latin-wordle"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          check out the original code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          play the original English version here.
        </a>
      </p>
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-white mt-6">
        Support For the Original Maker
      </h4>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        If you find this useful, please sign up on{' '}
        <a
          href="https://www.latindictionary.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline"
        >
          latindictionary.io
        </a>{' '}
        and share it with your friends!
      </p>
    </BaseModal>
  )
}
