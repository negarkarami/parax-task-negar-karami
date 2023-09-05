
import styles from './page.module.css'
import {Box, Container, Grid} from "@mui/material";
import LeftCard from "@/app/component/left-card/leftcard";
import RightCard from "@/app/component/Right-card/rightcard";

export default function Home() {
  return (
    <main className={styles.main}>
        <Box sx={{ flexGrow: 1, marginTop:{xs:"20px", sm:"60px" }}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} sm={4}>
                        <LeftCard/>
                    </Grid>
                    <Grid item xs={12} md={8} sm={8}>
                        <RightCard/>
                    </Grid>
                </Grid>
            </Container>
        </Box>

    </main>
  )
}
