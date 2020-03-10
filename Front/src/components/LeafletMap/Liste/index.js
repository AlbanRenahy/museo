
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import MainPicture from 'src/styles/images/louvre.jpg';

import './liste.scss';

const Liste = () => (
  <div id="liste">
    <Card.Group>
      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>

      <Card className="card">
        <Image src={MainPicture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Rue de Rivoli, 75001 Paris</Card.Header>
          <Card.Description>
            Musée le plus visité au monde. Il abrite notamment le célèbre tableau de la Joconde, peint par Léonard de Vinci.
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    <div className="back-to-map">
      <Link className="back-to-map-btn" to="/map">
        <Icon.Group>
          <Icon name="map outline" />
          <Icon corner name="reply" />
        </Icon.Group>
        Retour à la carte
      </Link>
    </div>
  </div>
);

export default Liste;
