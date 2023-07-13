import React, {useState} from 'react';
import {Text, Button, ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import {ScreenTemplate} from '../atoms';
import {WordList, PwdModal} from '../molecules';
import {useRecoveryWords} from '../hooks/useRecoveryWords';
import {useLoading} from '../hooks/useLoading';
import {generatePrivateKey} from '../libs/hdkey';

const CreateWallet = ({navigation}) => {
  const {t} = useTranslation();
  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);
  const {isLoading, withLoading} = useLoading();

  const {randomWords, generateWords, generateSeed} = useRecoveryWords();

  const onContinue = () => {
    setPasswordModalOpen(true);
  };

  const onCreateWallet = password =>
    withLoading(async () => {
      try {
        const seed = await generateSeed(password);

        if (seed !== undefined) {
          const key = await generatePrivateKey(seed);

          // loadWallet(key);
          setPasswordModalOpen(false);
        }
      } catch (error) {
        console.log('onCreateWallet#error', error.message);
      }
    });

  return (
    <ScreenTemplate>
      <PwdModal
        isVisible={isPasswordModalOpen}
        isWalletLoading={isLoading}
        setVisible={setPasswordModalOpen}
        onContinue={onCreateWallet}
      />
      <Text>{t('newaccount.text')}</Text>
      <ScrollView>
        <WordList list={randomWords} />
        <Button title={t('newaccount.refresh')} onPress={generateWords} />
        <Button title={t('newaccount.button')} onPress={onContinue} />
      </ScrollView>
    </ScreenTemplate>
  );
};

export {CreateWallet};
