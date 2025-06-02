import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";

interface PropsType {
  isDisabled: boolean;
  setFinish: () => void;
}
export default function ConfirmModal({ setFinish, isDisabled }: PropsType) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isDisabled={isDisabled} color="success" onPress={onOpen}>
        Finish
      </Button>
      <Modal isOpen={isOpen}  onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm</ModalHeader>
              <ModalBody>
                <p>
                  Your answers will be taken into consideration to create a
                  customized calendar for you. Will you confirm your answer?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="success"
                  onPress={() => {
                    setFinish();
                    onClose();
                  }}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
