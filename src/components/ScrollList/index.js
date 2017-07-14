import React,{Component} from 'react';
export default class ScrollList extends Component{
    constructor(){
        super();
        this.state = {isBind:false}
    }
    componentDidMount(){
        console.log(this.props.element);
    }
    bindScroll(e){
        //节流
        clearTimeout(this.timer);
        let {hasMore,isLoading} = this.props;
        this.timer = setTimeout(()=>{
            let {scrollHeight,scrollTop,offsetHeight} = e.target;
            if(scrollTop+offsetHeight+20>scrollHeight&&hasMore&&!isLoading){
                this.props.more();
            }
        },30)
    }
    componentWillReceiveProps(props){
        if(props.element&&!this.state.isBind){
            console.log(props.element);
            console.log('receive');
            props.element.addEventListener('scroll',this.bindScroll.bind(this),false);
            this.setState({
                isBind:true
            })
        }
    }
    render(){

        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}