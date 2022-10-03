import { Button, Card, Flex } from "@atmoutsourcing/siakit";
import { Modal } from '@atmoutsourcing/siakit';
import { useState } from "react";

export function TelaPrincipal(): JSX.Element {

  const [ showModal, setShowModal ] = useState(false)

  return (
    <>
        <Modal size="xs" isOpen={showModal} onRequestClose={() => setShowModal(false)} title="teste">
          <Card direction="column" gap={8} padding={30}>
<p>teste</p>
          </Card>
        </Modal>
      <Flex>
        <Button type="button" onClick={() => setShowModal(true)}>Abrir modal</Button>

      </Flex>
    </>
  )
}