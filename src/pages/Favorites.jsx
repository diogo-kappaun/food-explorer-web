import { BackButton } from '../components/BackButton'
import { Container } from '../components/Container'
import { FavoriteCard } from '../components/FavoriteCard'
import { Header } from '../components/Header'
import { Section } from '../components/Section'
import { Separator } from '../components/Separator'
import { Sidebar } from '../components/Sidebar'
import { Title } from '../components/Title'
import { useFavorites } from '../hooks/favorites'

export function Favorites() {
  const { favorites, toggle } = useFavorites()

  async function handleFavorite(id) {
    await toggle({ dishId: id })
  }

  return (
    <Container>
      <Header />
      <Sidebar />

      <Section>
        <BackButton />
        <Title>Favoritos</Title>

        <Separator />

        <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2">
          {favorites.length > 0 ? (
            favorites.map((favorite) => (
              <FavoriteCard
                key={favorite.id}
                onFavorite={() => handleFavorite(favorite.id)}
                data={favorite}
              />
            ))
          ) : (
            <p>Você ainda não tem favoritos!</p>
          )}
        </div>
      </Section>
    </Container>
  )
}
