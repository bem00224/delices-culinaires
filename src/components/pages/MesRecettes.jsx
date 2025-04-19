import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify/unstyled';
import styled from 'styled-components';
import { RiDeleteBin6Line } from "react-icons/ri";
import '../../style/MesRecettes.css'

const MesRecettes = () => {
    const [savedRecipes, setSavedRecipes] = useState([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
      setSavedRecipes(saved)
    }, [])

    const handleDelete = (id) => {
        const filtered = savedRecipes.filter(recipe => recipe.id !== id)
        localStorage.setItem('savedRecipes', JSON.stringify(filtered))
        setSavedRecipes(filtered)
        toast.success("Recette supprimée !")
    }
    
    
    return (
        <MesRecettesStyled className='recette-global'>
            <h2>{savedRecipes.length === 0 ? "" : "Mes Recettes" }</h2>
            <div className="recettes-container">
                {savedRecipes.length === 0 ? (
                    <div className='recettes-container-detail fade-in-up'>
                        <div className="recettes-container-top">
                            <p>Vous n'avez aucune recette enregistrée.</p>
                            <p>Naviguez à travers le site et enregistrez vos recettes préférées! 😊</p>
                            <Link to={"/"}>Retourner sur la page d'accueil</Link>
                        </div>
                    </div>
                ) : (
                    savedRecipes.map(recipe => (
                        <div className="recette-card" key={recipe.id}>
                            <div className='recette-card-description'>
                                <Link to={`/current-news/${recipe.title}`} className='description-link'>
                                    <div className='recette-card-description-image'>
                                        <img src={recipe.imageSource} alt={recipe.title} />
                                    </div>
                                </Link>
                                <div className='recette-card-detail'>
                                    <h3>{recipe.title}</h3>
                                    <button className='recette-card-detail-text' onClick={() => handleDelete(recipe.id)}>
                                        <RiDeleteBin6Line className='details-link' />
                                        <span >Supprimer</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </MesRecettesStyled>
    );
}

export default MesRecettes;

const MesRecettesStyled = styled.div`
    padding: 30px;
    

    /*.recettes-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        padding: 30px 100px 100px 50px;

        .recettes-container-top {
            height: 100vh;
            text-align: center;
            line-height: 2;
            color: rgb(255, 66, 105);
            font-weight: 600;
            font-size: 1.5rem;
            padding: 0px;
            margin-top: 95px;
        }
    }*/

    /*.recette-card {
        -webkit-box-align: center;
        align-items: center;
        max-width: 80%;
        opacity: 1;
        transition: 0.8s;
        .recette-card-description {
            display: flex;
            flex-direction: column;
            max-width: 80%;
            -webkit-box-align: center;
            align-items: center;
            background-color: white;
            padding: 10px;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
            .description-link {
                .recette-card-description-image {
                    width: 300px;
                    border-radius: 10px;
                    margin: 10px;
                    overflow: hidden;
                    position: relative;
                    transition: 0.9s;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    -webkit-box-align: center;
                    align-items: center;
                    img {
                        width: 100%;
                        object-fit: cover;
                        display: block;
                        height: 200px;
                    }
                }
            }
            .recette-card-detail {
                h3 {
                    margin: 0px;
                    padding: 10px;
                    color: rgb(0, 0, 0);
                    font-size: 1rem;
                    text-align: center;
                }
                .recette-card-detail-text {
                    -webkit-box-align: center;
                    align-items: center;
                    display: flex;
                    -webkit-box-pack: center;
                    justify-content: center;
                    cursor: pointer;
                    background-color: white;
                    color: #333;
                    border: none;
                    padding: 10px 0px;
                    cursor: pointer;
                    transition: 0.3s;
                    text-align: center;
                    margin: auto;

                    &:hover {
                        color: #e23357;
                    }
                    .details-link {
                        margin-right: 10px;
                    }
                    span {
                        margin-right: 5px;
                    }
                }
            }
        }
    }*/
`;

/**
img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: 10px;
        }

        h3 {
            font-size: 1.2rem;
            margin: 10px 0;
        }

        .details-link {
            display: inline-block;
            margin-bottom: 10px;
            color: #ff4269;
            text-decoration: none;
            font-weight: bold;
        }

        button {
            background-color: #ff4269;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: #e23357;
            }
        }
 */