
import { StyledH2, StyledSpan  } from "@/components";
import { pxParaRem } from "@/utils";
import { Avatar, Box} from "@mui/material";
import { AvatarsListProps } from "@/types";




function ListaAvatar(props: AvatarsListProps) {
    return(
        <>
          {
            props.listData.map((item,index) => (
                <Box sx={{
                    alignItems:"center",
                    display: "flex",
                    padding: `${pxParaRem(12)} 0`,
                    key:{index}
                }}>
                        <Box>
                            <Avatar 
                                alt={item.name}
                                src={item.avatar}
                                sx={{
                                    width: pxParaRem(48),
                                    height: pxParaRem(48),
                                    marginRight: pxParaRem(16)
                                }}
                            />
                        </Box>
                        <Box>
                            <StyledH2>{item.name}</StyledH2>
                            <StyledSpan>{item.subtitle}</StyledSpan>
                        </Box>
                 </Box>
            ))
          }
        </>
    )
}

export default ListaAvatar
