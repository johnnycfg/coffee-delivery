import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <main>
      <div>
        <h1>Complete seu pedido</h1>

        <div>
          <header>
            <MapPinLine />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
        </div>
      </div>
    </main>
  )
}
