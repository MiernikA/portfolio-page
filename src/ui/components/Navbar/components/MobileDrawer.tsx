import {Box, List, ListItem, ListItemButton, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import {useNavLinks} from "../hooks/useNavLinks";
import {LanguageSwitcher} from "./LanguageSwitch";
import {useActiveSection} from "../../../../context/ActiveSectionProvider/useActiveSection.ts";
import { responsiveTextColor } from "../../../../config/styles/theme";

type Props = {
    onClose: () => void;
    handleScroll: (id: string) => void;
};

export const MobileDrawer = ({onClose, handleScroll}: Props) => {
    const {activeSection} = useActiveSection();
    const {t} = useTranslation();
    const navLinks = useNavLinks();

    return (
        <Box sx={{py: 2}}>
            <List>
                {navLinks.map((link) => (
                    <ListItem key={link.id} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                handleScroll(link.id);
                                onClose();
                            }}
                            sx={{
                                textAlign: "center",
                                color: activeSection === link.id ? responsiveTextColor : "#808080",
                            }}
                        >
                            <Typography
                                sx={{
                                    width: "100%",
                                    fontSize: 18,
                                    fontWeight: 600,
                                    py: 1,
                                }}
                            >
                                {t(`navbar.${link.id}`)}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mr: 2,
                    }}
                >
                    <LanguageSwitcher/>
                </Box>
            </List>
        </Box>
    );
};
