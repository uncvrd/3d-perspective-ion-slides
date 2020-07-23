import React from 'react';
import './ExploreContainer.css';
import slideOpts from './slide-opts';
import { IonSlides, IonSlide, IonButton } from '@ionic/react';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
    return (
        <IonSlides options={slideOpts}>
            <IonSlide>
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <IonButton>Button 1</IonButton>
                    <IonButton>Button 2</IonButton>
                </div>
            </IonSlide>
            <IonSlide>
                <div
                    style={{
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <IonButton>Button 3</IonButton>
                    <IonButton>Button 4</IonButton>
                </div>
            </IonSlide>
        </IonSlides>
    );
};

export default ExploreContainer;
