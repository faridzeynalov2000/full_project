import { UiDesignSwitcher } from 'features/uiDesignSwitcher';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/redesigned/Stack';
import { Text } from 'shared/ui/redesigned/Text';
import { Page } from 'widgets/Page';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page>
            <VStack gap="16">
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
});

export default SettingsPage;
