import React from 'react';
import { Card, 
    CardActionArea, 
    CardActions, 
    CardMedia, 
    CardContent,
    Typography,
    Button,
    makeStyles,
    Grid
} from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        display:"flex",
    },
    media: {
        maxWidth:"xs",
        height:250
    },
    actions:{
        alignSelf:"center"
    },
    button: {
        flexWrap:"wrap",
        flexDirection:"column",
        justifyContent:"space-between"
    }
})

const Item = () => {
    const classes = useStyle();

    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="http://img.danawa.com/prod_img/500000/973/459/img/8459973_1.jpg"
                            title="sample img "
                        />
                    </CardActionArea>
                </Grid>
                <Grid item xs={12} sm={7}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            AMD 라이젠5-3세대 3600 (마티스)
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            AMD(소켓AM4) / 3세대 (Zen 2) / 7nm / 헥사(6)코어 / 12쓰레드 / 기본 클럭: 3.6GHz / 최대 클럭: 4.2GHz / L3 캐시: 32MB / TDP: 65W / PCIe4.0 / 메모리 규격: DDR4 / 3200MHz / 내장그래픽: 미탑재 / 기술 지원: SenseMI , StoreMI / 쿨러: Wraith Stealth 포함 / 출시가: 199달러(VAT별도)
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={2} className={classes.actions}>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary">
                        상세보기
                        </Button>
                        <Button size="small" color="primary">
                        견적함
                        </Button>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}

export default Item;